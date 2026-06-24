import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CourseCard } from "@/components/CourseCard";
import { useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";

export default function MyLearningScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { getEnrolledCourses, getCourseProgress, completedLessonIds, courses } =
    useAcademy();

  const enrolled = getEnrolledCourses();
  const inProgress = enrolled.filter((c) => {
    const p = getCourseProgress(c.id);
    return p > 0 && p < 100;
  });
  const completed = enrolled.filter((c) => getCourseProgress(c.id) === 100);
  const notStarted = enrolled.filter((c) => getCourseProgress(c.id) === 0);

  const totalLessons = courses.reduce((s, c) => s + c.lessons.length, 0);
  const completedCount = completedLessonIds.length;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop:
            Platform.OS === "web"
              ? insets.top + 67
              : insets.top + 16,
          paddingBottom:
            Platform.OS === "web"
              ? insets.bottom + 34 + 84
              : insets.bottom + 100,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.pageTitle, { color: colors.foreground }]}>
        O'rganishlarim
      </Text>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View
          style={[styles.statCard, { backgroundColor: colors.primary + "12", borderColor: colors.primary + "30" }]}
        >
          <Text style={[styles.statValue, { color: colors.primary }]}>
            {enrolled.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
            Kurslar
          </Text>
        </View>
        <View
          style={[styles.statCard, { backgroundColor: "#22C55E12", borderColor: "#22C55E30" }]}
        >
          <Text style={[styles.statValue, { color: "#22C55E" }]}>
            {completedCount}
          </Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
            Darslar
          </Text>
        </View>
        <View
          style={[styles.statCard, { backgroundColor: "#F59E0B12", borderColor: "#F59E0B30" }]}
        >
          <Text style={[styles.statValue, { color: "#F59E0B" }]}>
            {completed.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
            Tugagan
          </Text>
        </View>
      </View>

      {enrolled.length === 0 ? (
        <View style={styles.empty}>
          <View
            style={[styles.emptyIcon, { backgroundColor: colors.primary + "15" }]}
          >
            <Feather name="book" size={36} color={colors.primary} />
          </View>
          <Text style={[styles.emptyTitle, { color: colors.foreground }]}>
            Hali kurs yo'q
          </Text>
          <Text style={[styles.emptyDesc, { color: colors.mutedForeground }]}>
            Kurslarni ko'rib, o'zingizga mos birini tanlang va o'rganishni boshlang
          </Text>
          <Pressable
            onPress={() => router.push("/(tabs)/courses" as any)}
            style={[styles.browseBtn, { backgroundColor: colors.primary }]}
          >
            <Text style={[styles.browseBtnText, { color: colors.primaryForeground }]}>
              Kurslarni ko'rish
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          {inProgress.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
                Davom etmoqda
              </Text>
              {inProgress.map((c) => (
                <CourseCard
                  key={c.id}
                  course={c}
                  onPress={() => router.push(`/course/${c.id}` as any)}
                  showProgress
                  progress={getCourseProgress(c.id)}
                />
              ))}
            </View>
          )}

          {notStarted.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
                Boshlanmagan
              </Text>
              {notStarted.map((c) => (
                <CourseCard
                  key={c.id}
                  course={c}
                  onPress={() => router.push(`/course/${c.id}` as any)}
                  showProgress
                  progress={0}
                />
              ))}
            </View>
          )}

          {completed.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
                  Tugatilgan
                </Text>
                <View
                  style={[styles.badge, { backgroundColor: "#22C55E20" }]}
                >
                  <Feather name="award" size={12} color="#22C55E" />
                  <Text style={[styles.badgeText, { color: "#22C55E" }]}>
                    {completed.length} ta
                  </Text>
                </View>
              </View>
              {completed.map((c) => (
                <CourseCard
                  key={c.id}
                  course={c}
                  onPress={() => router.push(`/course/${c.id}` as any)}
                  showProgress
                  progress={100}
                />
              ))}
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20 },
  pageTitle: { fontSize: 28, fontFamily: "Inter_700Bold", marginBottom: 20 },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 28 },
  statCard: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    gap: 4,
  },
  statValue: { fontSize: 22, fontFamily: "Inter_700Bold" },
  statLabel: { fontSize: 11, fontFamily: "Inter_400Regular" },
  section: { marginBottom: 24 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    marginBottom: 12,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: { fontSize: 12, fontFamily: "Inter_600SemiBold" },
  empty: {
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 12,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  emptyTitle: { fontSize: 20, fontFamily: "Inter_700Bold" },
  emptyDesc: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    lineHeight: 20,
  },
  browseBtn: {
    marginTop: 8,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  browseBtnText: { fontSize: 15, fontFamily: "Inter_700Bold" },
});
