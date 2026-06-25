import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import WebView from "react-native-webview";
import { useColors } from "@/hooks/useColors";

interface Props {
  code: string;
  language: string;
  color: string;
}

function buildHtml(code: string, lang: string): string {
  const base = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{font-family:system-ui,sans-serif;padding:16px;margin:0;font-size:15px}</style></head>`;
  const l = lang.toLowerCase();
  if (l === "html") {
    if (code.includes("<!DOCTYPE") || code.includes("<html")) return code;
    return `${base}<body>${code}</body></html>`;
  }
  if (l === "css") {
    return `${base}<style>${code}</style><body><h1>Sarlavha</h1><p>Bu misol matn. Sizning CSS stilingiz shu yerda ko'rinadi.</p><button class="btn">Tugma</button><div class="box">Box element</div><a href="#">Havola</a></body></html>`;
  }
  if (l === "js" || l === "javascript") {
    const escaped = code.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
    return `${base}<body><div id="out" style="background:#f4f4f4;padding:12px;border-radius:8px;font-family:monospace;font-size:13px;white-space:pre-wrap;min-height:40px"></div><script>const _out=[];const _log=console.log;console.log=(...a)=>{_out.push(a.join(' '));document.getElementById('out').textContent=_out.join('\\n')};try{${escaped}}catch(e){document.getElementById('out').textContent='Xato: '+e.message}<\/script></body></html>`;
  }
  return `${base}<body><pre style="overflow-x:auto">${code}</pre></body></html>`;
}

const RUNNABLE = ["html", "css", "js", "javascript"];

export function CodePlayground({ code, language, color }: Props) {
  const colors = useColors();
  const [editedCode, setEditedCode] = useState(code);
  const [runKey, setRunKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const lang = language.toLowerCase();
  const isRunnable = RUNNABLE.includes(lang);
  const isEdited = editedCode !== code;

  const handleRun = () => {
    setRunKey((k) => k + 1);
    setIsOpen(true);
  };

  const html = buildHtml(editedCode, lang);

  return (
    <View style={styles.container}>
      <View style={[styles.codeBlock, { backgroundColor: "#0D1117", borderColor: color + "30" }]}>
        <View style={styles.codeHeader}>
          <View style={styles.codeDots}>
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
              <View key={c} style={[styles.codeDot, { backgroundColor: c }]} />
            ))}
          </View>
          <View style={styles.headerRight}>
            {isEdited && (
              <Pressable onPress={() => setEditedCode(code)} style={styles.resetBtn}>
                <Feather name="rotate-ccw" size={11} color="#8B9DB5" />
                <Text style={styles.resetText}>Asl</Text>
              </Pressable>
            )}
            {language ? (
              <Text style={styles.langLabel}>{language.toUpperCase()}</Text>
            ) : null}
          </View>
        </View>
        <TextInput
          value={editedCode}
          onChangeText={setEditedCode}
          multiline
          style={styles.codeInput}
          placeholderTextColor="#8B9DB5"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
      </View>

      {isRunnable && (
        <View style={styles.btnRow}>
          <Pressable
            onPress={handleRun}
            style={({ pressed }) => [
              styles.runBtn,
              { backgroundColor: color, opacity: pressed ? 0.85 : 1 },
            ]}
          >
            <Feather name="play" size={13} color="#fff" />
            <Text style={styles.runBtnText}>Ishga tushirish</Text>
          </Pressable>
          {isOpen && (
            <Pressable
              onPress={() => setIsOpen(false)}
              style={({ pressed }) => [
                styles.closeBtn,
                { backgroundColor: "#ffffff10", borderColor: color + "40", opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <Feather name="eye-off" size={13} color={color} />
            </Pressable>
          )}
        </View>
      )}

      {isOpen && (
        <View style={[styles.preview, { borderColor: color + "30" }]}>
          <View style={[styles.previewHeader, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
            <Feather name="monitor" size={12} color={colors.mutedForeground} />
            <Text style={[styles.previewLabel, { color: colors.mutedForeground }]}>Natija</Text>
          </View>
          <WebView
            key={runKey}
            source={{ html }}
            style={styles.webview}
            scrollEnabled
            javaScriptEnabled
            originWhitelist={["*"]}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  codeBlock: { borderRadius: 14, borderWidth: 1, overflow: "hidden" },
  codeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 10 },
  codeDots: { flexDirection: "row", gap: 6 },
  codeDot: { width: 10, height: 10, borderRadius: 5 },
  langLabel: { color: "#8B9DB5", fontSize: 10, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5 },
  resetBtn: { flexDirection: "row", alignItems: "center", gap: 4 },
  resetText: { color: "#8B9DB5", fontSize: 10, fontFamily: "Inter_400Regular" },
  codeInput: {
    color: "#E6EDF3",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    padding: 16,
    minHeight: 60,
    textAlignVertical: "top",
  },
  btnRow: { flexDirection: "row", gap: 8, marginTop: 8 },
  runBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  runBtnText: { fontSize: 13, fontFamily: "Inter_600SemiBold", color: "#fff" },
  closeBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  preview: { marginTop: 8, borderRadius: 14, borderWidth: 1, overflow: "hidden" },
  previewHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  previewLabel: { fontSize: 11, fontFamily: "Inter_500Medium" },
  webview: { height: 260 },
});
