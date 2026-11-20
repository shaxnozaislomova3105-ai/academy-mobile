import { Check, Lightbulb, PenLine, X } from "lucide-react-native";
import React, { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { BugExercise, Exercise, FillExercise, ParsonsExercise } from "@/data/courses";
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

const TYPE_LABELS: Record<Exercise["type"], string> = {
  fill: "Kodni to'ldiring",
  bug: "Xatoni toping",
  parsons: "Qatorlarni tartiblang",
};

// Bloklarni aralashtiradi; natija hech qachon to'g'ri tartib bilan bir xil bo'lmaydi
function shuffledPool(exercise: ParsonsExercise): number[] {
  const all = [...exercise.blocks, ...(exercise.distractors ?? [])].map((_, i) => i);
  if (all.length < 2) return all;
  let order = all;
  for (let attempt = 0; attempt < 10; attempt++) {
    order = [...all];
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    if (order.some((v, i) => v !== i)) break;
  }
  return order;
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
  const [pool] = useState<number[]>(() => (exercise.type === "parsons" ? shuffledPool(exercise) : []));
  const [chosen, setChosen] = useState<number[]>([]);

  const check = () => {
    let correct: boolean;
    if (exercise.type === "fill") {
      correct = exercise.answers.every((options, i) =>
        options.some((o) => normalize(o) === normalize(values[i] ?? ""))
      );
    } else if (exercise.type === "parsons") {
      const all = [...exercise.blocks, ...(exercise.distractors ?? [])];
      correct =
        chosen.length === exercise.blocks.length &&
        chosen.every((blockIndex, i) => all[blockIndex] === exercise.blocks[i]);
    } else {
      if (selectedLine === null) return;
      correct = selectedLine === exercise.bugLine;
    }
    setResult(correct ? "correct" : "wrong");
    saveAttempt(lessonId, index, correct, hintsUsed);
  };

  const canCheck =
    exercise.type === "fill"
      ? values.every((v) => v.trim() !== "")
      : exercise.type === "parsons"
        ? chosen.length === exercise.blocks.length
        : selectedLine !== null;

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={[styles.label, { color }]}>
        {index + 1}-mashq · {TYPE_LABELS[exercise.type]}
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
      ) : exercise.type === "parsons" ? (
        <ParsonsBody
          exercise={exercise}
          pool={pool}
          chosen={chosen}
          color={color}
          onChange={(next) => {
            setChosen(next);
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
            {exercise.type !== "bug" && exercise.expected ? ` Natija: ${exercise.expected}` : ""}
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

// Barmoq bilan bosish orqali ishlaydi: pastdagi blok javobga qo'shiladi, javobdagi blok bosilsa qaytadi
function ParsonsBody({
  exercise,
  pool,
  chosen,
  color,
  onChange,
}: {
  exercise: ParsonsExercise;
  pool: number[];
  chosen: number[];
  color: string;
  onChange: (next: number[]) => void;
}) {
  const colors = useColors();
  const all = [...exercise.blocks, ...(exercise.distractors ?? [])];
  const remaining = pool.filter((i) => !chosen.includes(i));

  return (
    <>
      <Text style={[styles.parsonsHint, { color: colors.mutedForeground }]}>
        Bloklarni to'g'ri tartibda bosing. Javobdagi blokni bossangiz, u pastga qaytadi.
        {exercise.distractors && exercise.distractors.length > 0 ? " Diqqat: bitta blok ortiqcha." : ""}
      </Text>

      <View style={[styles.answerBox, { borderColor: color + "60" }]}>
        {chosen.length === 0 ? (
          <Text style={[styles.placeholder, { color: colors.mutedForeground }]}>Javob shu yerda yig'iladi</Text>
        ) : (
          chosen.map((blockIndex, pos) => (
            <Pressable
              key={blockIndex}
              onPress={() => onChange(chosen.filter((i) => i !== blockIndex))}
              style={({ pressed }) => [styles.block, styles.codeBox, { opacity: pressed ? 0.8 : 1 }]}
            >
              <Text style={styles.lineNo}>{pos + 1}</Text>
              <Text style={[styles.code, styles.blockCode]}>{all[blockIndex]}</Text>
            </Pressable>
          ))
        )}
      </View>

      {remaining.length > 0 && (
        <View style={styles.poolBox}>
          {remaining.map((blockIndex) => (
            <Pressable
              key={blockIndex}
              onPress={() => onChange([...chosen, blockIndex])}
              style={({ pressed }) => [
                styles.block,
                { backgroundColor: colors.background, borderColor: colors.border, borderWidth: 1, opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <Text style={[styles.code, styles.blockCode, { color: colors.foreground }]}>{all[blockIndex]}</Text>
            </Pressable>
          ))}
        </View>
      )}
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
  parsonsHint: { fontSize: 12, fontFamily: "Inter_400Regular", lineHeight: 17 },
  answerBox: { borderWidth: 1, borderStyle: "dashed", borderRadius: 10, padding: 8, gap: 6, minHeight: 48, justifyContent: "center" },
  placeholder: { fontSize: 12, fontFamily: "Inter_400Regular", textAlign: "center" },
  poolBox: { gap: 6 },
  block: { flexDirection: "row", gap: 10, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 10 },
  blockCode: { flex: 1 },
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
