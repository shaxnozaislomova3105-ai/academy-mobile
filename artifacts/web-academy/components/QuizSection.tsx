import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";
import { ArrowRight, Check, CheckSquare, ChevronDown, ChevronUp, Info, RotateCcw, X } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

interface Props {
  lessonId: string;
  questions: QuizQuestion[];
  color: string;
}

type AnswerState = "idle" | "correct" | "wrong";

export function QuizSection({ lessonId, questions, color }: Props) {
  const colors = useColors();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const KEY = `quiz_${lessonId}`;

  useEffect(() => {
    AsyncStorage.getItem(KEY).then((v) => {
      if (v) setBestScore(parseInt(v, 10));
    });
  }, [KEY]);

  const handleSelect = (idx: number) => {
    if (answerState !== "idle") return;
    setSelected(idx);
    const isCorrect = idx === questions[current].correct;
    setAnswerState(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      setScore((s) => s + 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswerState("idle");
    } else {
      const realScore = answerState === "correct" ? score : score;
      setFinished(true);
      const best = bestScore ?? 0;
      if (realScore > best) {
        AsyncStorage.setItem(KEY, String(realScore));
        setBestScore(realScore);
      }
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswerState("idle");
    setScore(0);
    setFinished(false);
  };

  const pct = Math.round((score / questions.length) * 100);
  const q = questions[current];

  const optionColor = (idx: number) => {
    if (answerState === "idle") return colors.card;
    if (idx === questions[current].correct) return "#22C55E18";
    if (idx === selected && answerState === "wrong") return "#EF444418";
    return colors.card;
  };

  const optionBorder = (idx: number) => {
    if (answerState === "idle") return colors.border;
    if (idx === questions[current].correct) return "#22C55E";
    if (idx === selected && answerState === "wrong") return "#EF4444";
    return colors.border;
  };

  return (
    <View style={[styles.wrap, { borderColor: color + "30", backgroundColor: color + "05" }]}>
      {/* Header */}
      <Pressable style={styles.header} onPress={() => setExpanded((e) => !e)}>
        <View style={[styles.iconWrap, { backgroundColor: color + "20" }]}>
          <CheckSquare size={16} color={color} />
        </View>
        <View style={styles.headerInfo}>
          <Text style={[styles.headerTitle, { color: colors.foreground }]}>
            Bilimni tekshirish
          </Text>
          <Text style={[styles.headerSub, { color: colors.mutedForeground }]}>
            {questions.length} ta savol
            {bestScore !== null ? `  •  Eng yuqori: ${bestScore}/${questions.length}` : ""}
          </Text>
        </View>
        {expanded
          ? <ChevronUp size={18} color={colors.mutedForeground} />
          : <ChevronDown size={18} color={colors.mutedForeground} />
        }
      </Pressable>

      {expanded && (
        <View style={styles.body}>
          {finished ? (
            <View style={styles.result}>
              <View style={[styles.resultCircle, { borderColor: pct >= 70 ? "#22C55E" : "#F59E0B" }]}>
                <Text style={[styles.resultPct, { color: pct >= 70 ? "#22C55E" : "#F59E0B" }]}>
                  {pct}%
                </Text>
              </View>
              <Text style={[styles.resultTitle, { color: colors.foreground }]}>
                {pct >= 90 ? "A'lo natija!" : pct >= 70 ? "Yaxshi!" : "Qayta urinib ko'ring"}
              </Text>
              <Text style={[styles.resultSub, { color: colors.mutedForeground }]}>
                {score} / {questions.length} to'g'ri javob
              </Text>
              <Pressable
                onPress={handleRestart}
                style={[styles.restartBtn, { backgroundColor: color }]}
              >
                <RotateCcw size={14} color="#fff" />
                <Text style={styles.restartText}>Qayta boshlash</Text>
              </Pressable>
            </View>
          ) : (
            <View>
              {/* Progress */}
              <View style={styles.progressRow}>
                <Text style={[styles.progressText, { color: colors.mutedForeground }]}>
                  {current + 1} / {questions.length}
                </Text>
                <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
                  <View
                    style={[
                      styles.progressFill,
                      { backgroundColor: color, width: `${((current) / questions.length) * 100}%` as any },
                    ]}
                  />
                </View>
              </View>

              {/* Question */}
              <Text style={[styles.questionText, { color: colors.foreground }]}>
                {q.question}
              </Text>

              {/* Options */}
              {q.options.map((opt, idx) => (
                <Pressable
                  key={idx}
                  onPress={() => handleSelect(idx)}
                  style={[
                    styles.option,
                    { backgroundColor: optionColor(idx), borderColor: optionBorder(idx) },
                  ]}
                >
                  <View style={[styles.optionCircle, { borderColor: optionBorder(idx) }]}>
                    {answerState !== "idle" && idx === questions[current].correct && (
                      <Check size={12} color="#22C55E" />
                    )}
                    {answerState === "wrong" && idx === selected && (
                      <X size={12} color="#EF4444" />
                    )}
                    {(answerState === "idle" || (idx !== selected && idx !== questions[current].correct)) && (
                      <Text style={[styles.optionLetter, { color: optionBorder(idx) }]}>
                        {String.fromCharCode(65 + idx)}
                      </Text>
                    )}
                  </View>
                  <Text style={[styles.optionText, { color: colors.foreground }]}>{opt}</Text>
                </Pressable>
              ))}

              {/* Explanation + Next */}
              {answerState !== "idle" && (
                <View>
                  {q.explanation && (
                    <View style={[styles.explanation, { backgroundColor: colors.card, borderColor: colors.border }]}>
                      <Info size={13} color={colors.mutedForeground} />
                      <Text style={[styles.explanationText, { color: colors.mutedForeground }]}>
                        {q.explanation}
                      </Text>
                    </View>
                  )}
                  <Pressable
                    onPress={handleNext}
                    style={[styles.nextBtn, { backgroundColor: color }]}
                  >
                    <Text style={styles.nextText}>
                      {current + 1 < questions.length ? "Keyingi savol" : "Natijani ko'rish"}
                    </Text>
                    <ArrowRight size={16} color="#fff" />
                  </Pressable>
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { borderRadius: 16, borderWidth: 1, marginBottom: 20, overflow: "hidden" },
  header: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16 },
  iconWrap: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  headerInfo: { flex: 1 },
  headerTitle: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  headerSub: { fontSize: 12, fontFamily: "Inter_400Regular", marginTop: 2 },
  body: { paddingHorizontal: 16, paddingBottom: 16 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 },
  progressText: { fontSize: 12, fontFamily: "Inter_500Medium", minWidth: 36 },
  progressBar: { flex: 1, height: 4, borderRadius: 2, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },
  questionText: { fontSize: 15, fontFamily: "Inter_600SemiBold", lineHeight: 22, marginBottom: 14 },
  option: {
    flexDirection: "row", alignItems: "center", gap: 12,
    padding: 14, borderRadius: 12, borderWidth: 1.5, marginBottom: 10,
  },
  optionCircle: {
    width: 26, height: 26, borderRadius: 13, borderWidth: 1.5,
    alignItems: "center", justifyContent: "center",
  },
  optionLetter: { fontSize: 11, fontFamily: "Inter_700Bold" },
  optionText: { flex: 1, fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 20 },
  explanation: {
    flexDirection: "row", gap: 8, padding: 12,
    borderRadius: 10, borderWidth: 1, marginBottom: 12,
  },
  explanationText: { flex: 1, fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 18 },
  nextBtn: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    gap: 8, padding: 14, borderRadius: 12,
  },
  nextText: { color: "#fff", fontSize: 14, fontFamily: "Inter_600SemiBold" },
  result: { alignItems: "center", paddingVertical: 20, gap: 10 },
  resultCircle: {
    width: 90, height: 90, borderRadius: 45, borderWidth: 3,
    alignItems: "center", justifyContent: "center", marginBottom: 8,
  },
  resultPct: { fontSize: 28, fontFamily: "Inter_700Bold" },
  resultTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  resultSub: { fontSize: 14, fontFamily: "Inter_400Regular" },
  restartBtn: {
    flexDirection: "row", alignItems: "center", gap: 8,
    paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12, marginTop: 8,
  },
  restartText: { color: "#fff", fontSize: 14, fontFamily: "Inter_600SemiBold" },
});
