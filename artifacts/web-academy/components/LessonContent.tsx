import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { CodePlayground } from "@/components/CodePlayground";
import { useColors } from "@/hooks/useColors";
import { isRunnableCode } from "@/lib/playground";

interface Props {
  content: string;
  color: string;
}

const MONO = Platform.select({ ios: "Menlo", default: "monospace" });

export function LessonContent({ content, color }: Props) {
  const colors = useColors();

  // **qalin**, `kod` va *qiya* qator ichida
  const renderInline = (text: string): React.ReactNode[] =>
    text.split(/(`[^`]+`|\*\*[^*]+(?:\*[^*]+)*\*\*|\*[^*\s][^*]*\*)/).map((part, j) => {
      if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
        return (
          <Text key={j} style={[styles.inlineCode, { backgroundColor: color + "18", color }]}>
            {part.slice(1, -1)}
          </Text>
        );
      }
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return (
          <Text key={j} style={styles.boldInline}>
            {renderInline(part.slice(2, -2))}
          </Text>
        );
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        return (
          <Text key={j} style={styles.italicInline}>
            {part.slice(1, -1)}
          </Text>
        );
      }
      return part;
    });

  const elements: React.ReactNode[] = [];
  let inBlock = false;
  let blockLines: string[] = [];
  let blockLang = "";

  const flushBlock = (key: number) => {
    const code = blockLines.join("\n");
    if (code.trim()) {
      if (isRunnableCode(blockLang, code)) {
        elements.push(
          <CodePlayground key={`block-${key}`} code={code.trim()} language={blockLang} color={color} />
        );
      } else {
        elements.push(
          <View key={`block-${key}`} style={[styles.codeBlock, { backgroundColor: "#1E293B" }]}>
            <View style={[styles.codeBlockHeader, { backgroundColor: "#0F172A" }]}>
              <View style={styles.codeDots}>
                <View style={[styles.codeDot, { backgroundColor: "#FF5F56" }]} />
                <View style={[styles.codeDot, { backgroundColor: "#FFBD2E" }]} />
                <View style={[styles.codeDot, { backgroundColor: "#27C93F" }]} />
              </View>
              {blockLang ? (
                <Text style={styles.codeLang}>{blockLang.toUpperCase()}</Text>
              ) : null}
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.codeScroll}>
              <Text style={styles.codeText} selectable>
                {code}
              </Text>
            </ScrollView>
          </View>
        );
      }
    }
    blockLines = [];
    blockLang = "";
  };

  content.replace(/\r/g, "").split("\n").forEach((line, i) => {
    if (line.startsWith("```")) {
      if (inBlock) {
        flushBlock(i);
        inBlock = false;
      } else {
        blockLang = line.slice(3).trim();
        inBlock = true;
      }
      return;
    }
    if (inBlock) {
      blockLines.push(line);
      return;
    }

    const bullet = line.match(/^(\s*)[-*] (.*)$/);
    const numbered = line.match(/^(\d+)\. (.*)$/);
    if (/^### /.test(line)) {
      elements.push(
        <Text key={i} style={[styles.h3, { color: colors.foreground }]}>
          {renderInline(line.slice(4))}
        </Text>
      );
    } else if (/^## /.test(line)) {
      elements.push(
        <Text key={i} style={[styles.h2, { color: colors.foreground }]}>
          {renderInline(line.slice(3))}
        </Text>
      );
    } else if (/^# /.test(line)) {
      elements.push(
        <Text key={i} style={[styles.h1, { color: colors.foreground }]}>
          {renderInline(line.slice(2))}
        </Text>
      );
    } else if (bullet) {
      const task = bullet[2].match(/^\[( |x)\] (.*)$/);
      elements.push(
        <View key={i} style={[styles.bulletRow, bullet[1].length > 0 && styles.nested]}>
          <Text style={[styles.bullet, { color }]}>
            {task ? (task[1] === "x" ? "☑" : "☐") : "•"}
          </Text>
          <Text style={[styles.bulletText, { color: colors.foreground }]}>
            {renderInline(task ? task[2] : bullet[2])}
          </Text>
        </View>
      );
    } else if (numbered) {
      elements.push(
        <View key={i} style={styles.bulletRow}>
          <Text style={[styles.number, { color }]}>{numbered[1]}.</Text>
          <Text style={[styles.bulletText, { color: colors.foreground }]}>
            {renderInline(numbered[2])}
          </Text>
        </View>
      );
    } else if (line.trim() === "") {
      elements.push(<View key={i} style={styles.spacer} />);
    } else if (/^\*\*[^*]+\*\*:?$/.test(line.trim())) {
      elements.push(
        <Text key={i} style={[styles.bold, { color: colors.foreground }]}>
          {renderInline(line.trim().replace(/^\*\*|\*\*:?$/g, ""))}
        </Text>
      );
    } else {
      elements.push(
        <Text key={i} style={[styles.paragraph, { color: colors.foreground }]}>
          {renderInline(line)}
        </Text>
      );
    }
  });

  return <View style={styles.body}>{elements}</View>;
}

const styles = StyleSheet.create({
  body: { marginBottom: 24 },
  paragraph: { fontSize: 15, fontFamily: "Inter_400Regular", lineHeight: 24, marginBottom: 4 },
  bold: { fontSize: 15, fontFamily: "Inter_700Bold", marginBottom: 8 },
  boldInline: { fontFamily: "Inter_700Bold" },
  italicInline: { fontStyle: "italic" },
  h1: { fontSize: 20, fontFamily: "Inter_700Bold", marginBottom: 12 },
  h2: { fontSize: 18, fontFamily: "Inter_700Bold", marginBottom: 10 },
  h3: { fontSize: 16, fontFamily: "Inter_600SemiBold", marginBottom: 8 },
  bulletRow: { flexDirection: "row", gap: 8, marginBottom: 4 },
  nested: { marginLeft: 18 },
  bullet: { fontSize: 18, lineHeight: 24 },
  number: { fontSize: 15, fontFamily: "Inter_600SemiBold", lineHeight: 24 },
  bulletText: { flex: 1, fontSize: 15, fontFamily: "Inter_400Regular", lineHeight: 24 },
  spacer: { height: 8 },
  inlineCode: { fontFamily: MONO, fontSize: 13, paddingHorizontal: 4, borderRadius: 4 },
  codeBlock: { borderRadius: 12, overflow: "hidden", marginBottom: 16 },
  codeBlockHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 14, paddingVertical: 8 },
  codeDots: { flexDirection: "row", gap: 6 },
  codeDot: { width: 10, height: 10, borderRadius: 5 },
  codeLang: { fontSize: 11, fontFamily: "Inter_600SemiBold", color: "#64748B", letterSpacing: 0.5 },
  codeScroll: { paddingHorizontal: 16, paddingVertical: 14 },
  codeText: { fontFamily: MONO, fontSize: 13, lineHeight: 22, color: "#E2E8F0" },
});
