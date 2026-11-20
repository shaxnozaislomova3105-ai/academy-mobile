import { HelpCircle } from "lucide-react-native";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useColors } from "@/hooks/useColors";

const MONO = Platform.select({ ios: "Menlo", default: "monospace" });

export type PredictVerdict = "match" | "differ" | null;

// PRIMM modelining "Predict" bosqichi: o'quvchi kodni ishga tushirishdan oldin natijani taxmin qiladi
export function PredictPrompt({
  value,
  onChange,
  nudged,
  color,
}: {
  value: string;
  onChange: (text: string) => void;
  nudged: boolean;
  color: string;
}) {
  const colors = useColors();
  return (
    <View style={[styles.box, { backgroundColor: colors.card, borderColor: nudged ? color : colors.border }]}>
      <View style={styles.titleRow}>
        <HelpCircle size={14} color={color} />
        <Text style={[styles.title, { color: colors.foreground }]}>Avval taxmin qiling: bu kod nima chiqaradi?</Text>
      </View>
      <TextInput
        value={value}
        onChangeText={onChange}
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        placeholder="Taxminingizni yozing"
        placeholderTextColor={colors.mutedForeground}
        style={[styles.input, { color: colors.foreground, borderColor: colors.border, backgroundColor: colors.background }]}
      />
      {nudged && (
        <Text style={[styles.note, { color: colors.mutedForeground }]}>
          Taxmin qilish kodni tushunishga yordam beradi. Taxminsiz ko'rmoqchi bo'lsangiz, tugmani yana bosing.
        </Text>
      )}
    </View>
  );
}

// Ishga tushirilgandan keyin: taxmin natija bilan solishtiriladi (Run → Investigate → Modify)
export function PredictReview({
  prediction,
  verdict,
  onVerdict,
  color,
}: {
  prediction: string;
  verdict: PredictVerdict;
  onVerdict: (v: PredictVerdict) => void;
  color: string;
}) {
  const colors = useColors();
  return (
    <View style={[styles.box, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={[styles.label, { color: colors.mutedForeground }]}>Sizning taxminingiz</Text>
      <Text style={[styles.prediction, { color: colors.foreground }]}>{prediction}</Text>
      {verdict === null ? (
        <>
          <Text style={[styles.title, { color: colors.foreground }]}>Natija taxminingizga mos keldimi?</Text>
          <View style={styles.row}>
            <Pressable
              onPress={() => onVerdict("match")}
              style={({ pressed }) => [styles.btn, { backgroundColor: color, opacity: pressed ? 0.85 : 1 }]}
            >
              <Text style={styles.btnText}>Ha, mos keldi</Text>
            </Pressable>
            <Pressable
              onPress={() => onVerdict("differ")}
              style={({ pressed }) => [styles.btnOutline, { borderColor: colors.border, opacity: pressed ? 0.8 : 1 }]}
            >
              <Text style={[styles.btnOutlineText, { color: colors.foreground }]}>Yo'q, farq qildi</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <Text style={[styles.note, { color: colors.foreground }]}>
          {verdict === "match"
            ? "Zo'r! Endi kodni o'zgartirib ko'ring: bitta qiymatni almashtiring va natija qanday o'zgarishini yana taxmin qiling."
            : "Bu yaxshi imkoniyat: kodni qatorma-qator qayta o'qing va farq qayerda paydo bo'lganini toping. Keyin kodni o'zgartirib, yana sinab ko'ring."}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { marginTop: 8, borderRadius: 12, borderWidth: 1, padding: 12, gap: 8 },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  title: { fontSize: 13, fontFamily: "Inter_600SemiBold", lineHeight: 18 },
  label: { fontSize: 11, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.4 },
  prediction: { fontFamily: MONO, fontSize: 13, lineHeight: 19 },
  input: { borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8, fontFamily: MONO, fontSize: 13, minHeight: 40, textAlignVertical: "top" },
  note: { fontSize: 12, fontFamily: "Inter_400Regular", lineHeight: 18 },
  row: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  btn: { paddingHorizontal: 14, paddingVertical: 9, borderRadius: 10 },
  btnText: { color: "#fff", fontSize: 13, fontFamily: "Inter_600SemiBold" },
  btnOutline: { paddingHorizontal: 14, paddingVertical: 9, borderRadius: 10, borderWidth: 1 },
  btnOutlineText: { fontSize: 13, fontFamily: "Inter_500Medium" },
});
