import { Stack, useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import {
  fetchClassOverview,
  fetchTeacherClasses,
  formatDate,
  StudentOverview,
  TeacherClass,
} from "@/lib/teacher";

export default function TeacherPanelScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [classes, setClasses] = useState<TeacherClass[]>([]);
  const [activeClass, setActiveClass] = useState<string | null>(null);
  const [students, setStudents] = useState<StudentOverview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (classId?: string | null) => {
    setLoading(true);
    setError(null);
    try {
      const list = await fetchTeacherClasses();
      setClasses(list);
      const selected = classId ?? list[0]?.class_id ?? null;
      setActiveClass(selected);
      setStudents(selected ? await fetchClassOverview(selected) : []);
    } catch (e) {
      console.warn(e);
      setError("Ma'lumotlarni yuklab bo'lmadi. Internet aloqasini tekshiring.");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const totals = students.reduce(
    (s, st) => ({
      lessons: s.lessons + st.completed_lessons,
      minutes: s.minutes + st.minutes,
      active: s.active + (st.last_active ? 1 : 0),
    }),
    { lessons: 0, minutes: 0, active: 0 }
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: "O'qituvchi paneli",
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
        refreshControl={<RefreshControl refreshing={false} onRefresh={() => load(activeClass)} />}
      >
        {loading && classes.length === 0 ? (
          <ActivityIndicator style={styles.loader} color={colors.primary} />
        ) : error ? (
          <Text style={[styles.note, { color: colors.mutedForeground }]}>{error}</Text>
        ) : classes.length === 0 ? (
          <Text style={[styles.note, { color: colors.mutedForeground }]}>
            Sizga hali sinf biriktirilmagan.
          </Text>
        ) : (
          <>
            <View style={styles.chips}>
              {classes.map((c) => {
                const selected = c.class_id === activeClass;
                return (
                  <Pressable
                    key={c.class_id}
                    onPress={() => load(c.class_id)}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: selected ? colors.primary : colors.card,
                        borderColor: selected ? colors.primary : colors.border,
                      },
                    ]}
                  >
                    <Text style={[styles.chipText, { color: selected ? "#fff" : colors.foreground }]}>
                      {c.name} ({c.student_count})
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.statsRow}>
              {[
                { label: "O'quvchilar", value: students.length },
                { label: "Faol", value: totals.active },
                { label: "Darslar", value: totals.lessons },
                { label: "Daqiqa", value: totals.minutes },
              ].map((s) => (
                <View key={s.label} style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
                  <Text style={[styles.statValue, { color: colors.primary }]}>{s.value}</Text>
                  <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{s.label}</Text>
                </View>
              ))}
            </View>

            {loading ? (
              <ActivityIndicator style={styles.loader} color={colors.primary} />
            ) : students.length === 0 ? (
              <Text style={[styles.note, { color: colors.mutedForeground }]}>
                Bu sinfda hali ro'yxatdan o'tgan o'quvchi yo'q.
              </Text>
            ) : (
              students.map((st) => (
                <Pressable
                  key={st.student_id}
                  onPress={() =>
                    router.push({
                      pathname: "/teacher/[id]",
                      params: { id: st.student_id, name: st.full_name ?? "" },
                    } as any)
                  }
                  style={({ pressed }) => [
                    styles.row,
                    { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.85 : 1 },
                  ]}
                >
                  <View style={styles.rowInfo}>
                    <Text style={[styles.rowName, { color: colors.foreground }]} numberOfLines={1}>
                      {st.full_name || "Ismsiz"}
                    </Text>
                    <Text style={[styles.rowMeta, { color: colors.mutedForeground }]}>
                      {st.completed_lessons} dars · test o'rtacha{" "}
                      {st.avg_quiz_percent === null ? "—" : `${st.avg_quiz_percent}%`} · {st.minutes} daq
                    </Text>
                    <Text style={[styles.rowMeta, { color: colors.mutedForeground }]}>
                      Oxirgi faollik: {formatDate(st.last_active)}
                    </Text>
                  </View>
                  <ChevronRight size={18} color={colors.mutedForeground} />
                </Pressable>
              ))
            )}
          </>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 12 },
  loader: { marginTop: 40 },
  note: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", marginTop: 40, lineHeight: 20 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1 },
  chipText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  statsRow: { flexDirection: "row", gap: 8, marginBottom: 4 },
  statCard: { flex: 1, alignItems: "center", paddingVertical: 12, borderRadius: 12, borderWidth: 1, gap: 2 },
  statValue: { fontSize: 18, fontFamily: "Inter_700Bold" },
  statLabel: { fontSize: 11, fontFamily: "Inter_400Regular" },
  row: { flexDirection: "row", alignItems: "center", gap: 12, padding: 14, borderRadius: 12, borderWidth: 1 },
  rowInfo: { flex: 1, gap: 3 },
  rowName: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  rowMeta: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
