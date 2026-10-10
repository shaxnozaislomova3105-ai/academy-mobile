// @ts-nocheck
import { COURSES } from "../data/courses";
import fs from "fs";

function q(v) {
  if (v == null) return "null";
  return "'" + String(v).replace(/'/g, "''") + "'";
}

let sql =
  "alter table lessons add column if not exists links jsonb default '[]';\n" +
  "alter table courses add column if not exists instructor text;\n";

COURSES.forEach(function (c) {
  sql += "update courses set instructor=" + q(c.instructor) + " where id=" + q(c.id) + ";\n";
  (c.lessons || []).forEach(function (l) {
    if (l.links && l.links.length) {
      sql += "update lessons set links=" + q(JSON.stringify(l.links)) + "::jsonb where id=" + q(l.id) + ";\n";
    }
  });
});

fs.writeFileSync("patch.sql", sql);
console.log("patch.sql tayyor");