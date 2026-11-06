import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { fetchStudentDetail, formatDate, StudentLessonRow } from "@/lib/teacher";

export default function TeacherStudentScreen() {
  const { id, name } = useLocalSearchParams<{ id: string; name?: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [rows, setRows] = useState<StudentLessonRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchStudentDetail(id)
      .then(setRows)
      .catch((e) => {
        console.warn(e);
        setError("Ma'lumotlarni yuklab bo'lmadi yoki bu o'quvchi sizning sinfingizda emas.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Stack.Screen
        options={{
          title: name || "O'quvchi",
          headerShown: true,
          headerBackTitle: "Orqaga",
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.foreground,
          headerShadowVisible: false,
        }}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 24 }]}
      >
        {loading ? (
          <ActivityIndicator style={styles.loader} color={colors.primary} />
        ) : error ? (
          <Text style={[styles.note, { color: colors.mutedForeground }]}>{error}</Text>
        ) : rows.length === 0 ? (
          <Text style={[styles.note, { color: colors.mutedForeground }]}>
            Bu o'quvchi hali hech bir darsni boshlamagan.
          </Text>
        ) : (
          rows.map((r, i) => (
            <View
              key={`${r.course_title}-${r.lesson_title}-${i}`}
              style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <Text style={[styles.course, { color: colors.mutedForeground }]}>{r.course_title}</Text>
              <Text style={[styles.lesson, { color: colors.foreground }]}>{r.lesson_title}</Text>
              <Text style={[styles.meta, { color: colors.mutedForeground }]}>
                {r.completed_at ? `Bajarilgan: ${formatDate(r.completed_at)}` : "Bajarilmagan"}
                {" · "}
                {r.attempts > 0 ? `Test: ${r.best_score}/${r.total} (${r.attempts} urinish)` : "Test yechilmagan"}
                {" · "}
                {r.minutes ?? 0} daq
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 10 },
  loader: { marginTop: 40 },
  note: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", marginTop: 40, lineHeight: 20 },
  row: { padding: 14, borderRadius: 12, borderWidth: 1, gap: 3 },
  course: { fontSize: 11, fontFamily: "Inter_600SemiBold", textTransform: "uppercase" },
  lesson: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  meta: { fontSize: 12, fontFamily: "Inter_400Regular", lineHeight: 18 },
});
