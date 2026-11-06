import { Check, Lightbulb, PenLine, X } from "lucide-react-native";
import React, { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { BugExercise, Exercise, FillExercise } from "@/data/courses";
import { useColors } from "@/hooks/useColors";
import { supabase } from "@/lib/supabase";

interface Props {
  lessonId: string;
  exercises: Exercise[];
  color: string;
}

const MONO = Platform.select({ ios: "Menlo", default: "monospace" });

// Bo'sh joy, qo'shtirnoq turi va oxiridagi nuqta-vergul farqlari hisobga olinmaydi
function normalize(value: string): string {
  return value.trim().replace(/\s+/g, " ").replace(/'/g, '"').replace(/;$/, "");
}

function saveAttempt(lessonId: string, index: number, correct: boolean, hintsUsed: number) {
  supabase
    .from("exercise_attempts")
    .insert({ lesson_id: lessonId, exercise_index: index, correct, hints_used: hintsUsed })
    .then(({ error }) => {
      if (error) console.warn(error.message);
    });
}

export function ExerciseSection({ lessonId, exercises, color }: Props) {
  const colors = useColors();

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <PenLine size={16} color={color} />
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Mashqlar</Text>
      </View>
      {exercises.map((ex, i) => (
        <ExerciseCard key={`${lessonId}-${i}`} lessonId={lessonId} index={i} exercise={ex} color={color} />
      ))}
    </View>
  );
}

function ExerciseCard({ lessonId, index, exercise, color }: { lessonId: string; index: number; exercise: Exercise; color: string }) {
  const colors = useColors();
  const [hintsUsed, setHintsUsed] = useState(0);
  const [result, setResult] = useState<"idle" | "correct" | "wrong">("idle");
  const [values, setValues] = useState<string[]>(
    exercise.type === "fill" ? exercise.answers.map(() => "") : []
  );
  const [selectedLine, setSelectedLine] = useState<number | null>(null);

  const check = () => {
    let correct: boolean;
    if (exercise.type === "fill") {
      correct = exercise.answers.every((options, i) =>
        options.some((o) => normalize(o) === normalize(values[i] ?? ""))
      );
    } else {
      if (selectedLine === null) return;
      correct = selectedLine === exercise.bugLine;
    }
    setResult(correct ? "correct" : "wrong");
    saveAttempt(lessonId, index, correct, hintsUsed);
  };

  const canCheck = exercise.type === "fill" ? values.every((v) => v.trim() !== "") : selectedLine !== null;

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={[styles.label, { color }]}>
        {index + 1}-mashq · {exercise.type === "fill" ? "Kodni to'ldiring" : "Xatoni toping"}
      </Text>
      <Text style={[styles.prompt, { color: colors.foreground }]}>{exercise.prompt}</Text>

      {exercise.type === "fill" ? (
        <FillBody
          exercise={exercise}
          values={values}
          onChange={(i, v) => {
            setValues((prev) => prev.map((p, j) => (j === i ? v : p)));
            setResult("idle");
          }}
        />
      ) : (
        <BugBody
          exercise={exercise}
          selected={selectedLine}
          color={color}
          onSelect={(line) => {
            setSelectedLine(line);
            setResult("idle");
          }}
        />
      )}

      {hintsUsed > 0 && (
        <View style={[styles.hintBox, { backgroundColor: "#F59E0B12", borderColor: "#F59E0B40" }]}>
          {exercise.hints.slice(0, hintsUsed).map((h, i) => (
            <Text key={i} style={[styles.hintText, { color: colors.foreground }]}>
              {i + 1}. {h}
            </Text>
          ))}
        </View>
      )}

      {result === "correct" && (
        <View style={[styles.resultBox, { backgroundColor: "#22C55E14", borderColor: "#22C55E50" }]}>
          <Check size={16} color="#22C55E" />
          <Text style={[styles.resultText, { color: colors.foreground }]}>
            To'g'ri!
            {exercise.type === "fill" && exercise.expected ? ` Natija: ${exercise.expected}` : ""}
            {exercise.type === "bug" ? ` ${exercise.explanation}` : ""}
          </Text>
        </View>
      )}
      {result === "wrong" && (
        <View style={[styles.resultBox, { backgroundColor: "#EF444414", borderColor: "#EF444450" }]}>
          <X size={16} color="#EF4444" />
          <Text style={[styles.resultText, { color: colors.foreground }]}>
            Hali to'g'ri emas. Yana urinib ko'ring yoki maslahatdan foydalaning.
          </Text>
        </View>
      )}

      <View style={styles.actions}>
        <Pressable
          onPress={check}
          disabled={!canCheck}
          style={({ pressed }) => [
            styles.checkBtn,
            { backgroundColor: color, opacity: !canCheck ? 0.5 : pressed ? 0.85 : 1 },
          ]}
        >
          <Text style={styles.checkText}>Tekshirish</Text>
        </Pressable>
        {hintsUsed < exercise.hints.length && result !== "correct" && (
          <Pressable
            onPress={() => setHintsUsed((h) => h + 1)}
            style={({ pressed }) => [
              styles.hintBtn,
              { borderColor: colors.border, opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Lightbulb size={14} color="#F59E0B" />
            <Text style={[styles.hintBtnText, { color: colors.foreground }]}>
              {hintsUsed === exercise.hints.length - 1 ? "Yechimni ko'rish" : `Maslahat ${hintsUsed + 1}/${exercise.hints.length - 1}`}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

function FillBody({ exercise, values, onChange }: { exercise: FillExercise; values: string[]; onChange: (i: number, v: string) => void }) {
  const colors = useColors();
  let blank = 0;
  const shown = exercise.code.replace(/___/g, () => `[${++blank}]`);

  return (
    <>
      <View style={styles.codeBox}>
        <Text style={styles.code}>{shown}</Text>
      </View>
      {values.map((v, i) => (
        <View key={i} style={styles.inputRow}>
          <Text style={[styles.inputLabel, { color: colors.mutedForeground }]}>[{i + 1}]</Text>
          <TextInput
            value={v}
            onChangeText={(text) => onChange(i, text)}
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            placeholder={`${i + 1}-bo'sh joy`}
            placeholderTextColor={colors.mutedForeground}
            style={[styles.input, { color: colors.foreground, borderColor: colors.border, backgroundColor: colors.background }]}
          />
        </View>
      ))}
    </>
  );
}

function BugBody({ exercise, selected, color, onSelect }: { exercise: BugExercise; selected: number | null; color: string; onSelect: (line: number) => void }) {
  return (
    <View style={styles.codeBox}>
      {exercise.code.split("\n").map((line, i) => (
        <Pressable
          key={i}
          onPress={() => onSelect(i)}
          style={[styles.lineRow, selected === i && { backgroundColor: color + "40" }]}
        >
          <Text style={styles.lineNo}>{i + 1}</Text>
          <Text style={styles.code}>{line || " "}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 20, gap: 12 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  sectionTitle: { fontSize: 17, fontFamily: "Inter_700Bold" },
  card: { borderRadius: 14, borderWidth: 1, padding: 14, gap: 10 },
  label: { fontSize: 11, fontFamily: "Inter_700Bold", textTransform: "uppercase", letterSpacing: 0.4 },
  prompt: { fontSize: 14, fontFamily: "Inter_600SemiBold", lineHeight: 20 },
  codeBox: { backgroundColor: "#1E293B", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12 },
  code: { fontFamily: MONO, fontSize: 13, lineHeight: 21, color: "#E2E8F0" },
  lineRow: { flexDirection: "row", gap: 10, borderRadius: 6, paddingHorizontal: 4 },
  lineNo: { fontFamily: MONO, fontSize: 13, lineHeight: 21, color: "#64748B", minWidth: 16 },
  inputRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  inputLabel: { fontFamily: MONO, fontSize: 13, minWidth: 26 },
  input: { flex: 1, borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8, fontFamily: MONO, fontSize: 14 },
  hintBox: { borderWidth: 1, borderRadius: 10, padding: 10, gap: 4 },
  hintText: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 19 },
  resultBox: { flexDirection: "row", gap: 8, borderWidth: 1, borderRadius: 10, padding: 10, alignItems: "flex-start" },
  resultText: { flex: 1, fontSize: 13, fontFamily: "Inter_500Medium", lineHeight: 19 },
  actions: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  checkBtn: { paddingHorizontal: 18, paddingVertical: 10, borderRadius: 10 },
  checkText: { color: "#fff", fontSize: 13, fontFamily: "Inter_600SemiBold" },
  hintBtn: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 10, borderWidth: 1 },
  hintBtnText: { fontSize: 13, fontFamily: "Inter_500Medium" },
});
