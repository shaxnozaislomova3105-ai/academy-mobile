// @ts-nocheck
import { COURSES } from "../data/courses";
import fs from "fs";

function q(v) {
  if (v == null) return "null";
  return "'" + String(v).replace(/'/g, "''") + "'";
}

function j(v) {
  return "'" + JSON.stringify(v == null ? [] : v).replace(/'/g, "''") + "'::jsonb";
}

let sql = "";

COURSES.forEach(function (c, ci) {
  sql +=
    "insert into courses (id,title,description,category,level,duration,color,image,is_premium,topics,position) values (" +
    [
      q(c.id),
      q(c.title),
      q(c.description),
      q(c.category),
      q(c.level),
      q(c.duration),
      q(c.color),
      q(c.image),
      c.isPremium ? "true" : "false",
      j(c.topics),
      ci + 1,
    ].join(",") +
    ");\n";

  (c.lessons || []).forEach(function (l) {
    sql +=
      "insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values (" +
      [
        q(l.id),
        q(c.id),
        q(l.title),
        q(l.description),
        q(l.duration),
        q(l.content),
        q(l.videoUrl),
        q(l.type),
        j(l.questions),
        l.order || 0,
      ].join(",") +
      ");\n";
  });
});

fs.writeFileSync("seed.sql", sql);
console.log("seed.sql tayyor");