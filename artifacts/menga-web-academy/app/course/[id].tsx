import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LessonItem } from "@/components/LessonItem";
import { useAcademy } from "@/context/AcademyContext";
import { COURSES } from "@/data/courses";
import { useColors } from "@/hooks/useColors";

const IMAGES: Record<string, ReturnType<typeof require>> = {
  "course-web-basics": require("@/assets/images/course-web-basics.png"),
  "course-react": require("@/assets/images/course-react.png"),
  "course-nodejs": require("@/assets/images/course-nodejs.png"),
  "course-html": require("@/assets/images/course-html.png"),
  "course-css": require("@/assets/images/course-css.png"),
  "course-fullstack": require("@/assets/images/course-fullstack.png"),
};

const LEVEL_COLORS: Record<string, string> = {
  "Boshlang'ich": "#22C55E",
  "O'rta": "#F59E0B",
  "Murakkab": "#EF4444",
};

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { isEnrolled, enrollCourse, unenrollCourse, isLessonCompleted, getCourseProgress } =
    useAcademy();

  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.foreground }}>Kurs topilmadi</Text>
      </View>
    );
  }

  const enrolled = isEnrolled(course.id);
  const progress = getCourseProgress(course.id);
  const imageSource = course.image ? IMAGES[course.image] : null;
  const levelColor = LEVEL_COLORS[course.level] ?? colors.primary;
  const completedCount = course.lessons.filter((l) => isLessonCompleted(l.id)).length;

  const handleEnroll = async () => {
    if (enrolled) {
      await unenrollCourse(course.id);
    } else {
      await enrollCourse(course.id);
      if (Platform.OS !== "web")
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: course.title,
          headerShown: true,
          headerBackTitle: "Orqaga",
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.foreground,
          headerShadowVisible: false,
        }}
      />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Platform.OS === "web" ? insets.bottom + 34 : insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={[styles.hero, { backgroundColor: course.color + "18" }]}>
          {imageSource ? (
            <Image source={imageSource} style={styles.heroImage} />
          ) : (
            <View style={styles.heroPlaceholder}>
              <Feather name="book-open" size={48} color={course.color} />
            </View>
          )}
        </View>

        <View style={styles.body}>
          {/* Category + Level */}
          <View style={styles.tagRow}>
            <View style={[styles.catTag, { backgroundColor: course.color + "15" }]}>
              <Text style={[styles.catTagText, { color: course.color }]}>{course.category}</Text>
            </View>
            <View style={[styles.levelTag, { backgroundColor: levelColor + "15" }]}>
              <Text style={[styles.levelTagText, { color: levelColor }]}>{course.level}</Text>
            </View>
          </View>

          <Text style={[styles.title, { color: colors.foreground }]}>{course.title}</Text>
          <Text style={[styles.description, { color: colors.mutedForeground }]}>
            {course.description}
          </Text>

          {/* Meta row */}
          <View style={[styles.metaCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            {[
              { icon: "user" as const, val: course.instructor },
              { icon: "book-open" as const, val: `${course.lessonsCount} dars` },
              { icon: "clock" as const, val: course.duration },
            ].map((m, i) => (
              <View key={i} style={styles.metaItem}>
                <Feather name={m.icon} size={13} color={colors.primary} />
                <Text style={[styles.metaVal, { color: colors.foreground }]}>{m.val}</Text>
              </View>
            ))}
          </View>

          {/* Topics */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Mavzular</Text>
            <View style={styles.topicsRow}>
              {course.topics.map((t) => (
                <View
                  key={t}
                  style={[styles.topicTag, { backgroundColor: colors.muted, borderColor: colors.border }]}
                >
                  <Feather name="check" size={11} color={colors.primary} />
                  <Text style={[styles.topicText, { color: colors.foreground }]}>{t}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Progress (if enrolled) */}
          {enrolled && (
            <View style={[styles.progressCard, { backgroundColor: colors.primary + "10", borderColor: colors.primary + "25" }]}>
              <View style={styles.progressHeader}>
                <Text style={[styles.progressLabel, { color: colors.foreground }]}>Sizning progressingiz</Text>
                <Text style={[styles.progressPct, { color: colors.primary }]}>{progress}%</Text>
              </View>
              <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
                <View style={[styles.progressFill, { backgroundColor: colors.primary, width: `${progress}%` as any }]} />
              </View>
              <Text style={[styles.progressSub, { color: colors.mutedForeground }]}>
                {completedCount} / {course.lessons.length} dars bajarildi
              </Text>
            </View>
          )}

          {/* Enroll CTA */}
          <Pressable
            onPress={handleEnroll}
            style={({ pressed }) => [
              styles.enrollBtn,
              {
                backgroundColor: enrolled ? colors.muted : colors.primary,
                borderColor: enrolled ? colors.border : colors.primary,
                opacity: pressed ? 0.85 : 1,
              },
            ]}
          >
            <Feather
              name={enrolled ? "check-circle" : "play-circle"}
              size={18}
              color={enrolled ? colors.mutedForeground : "#fff"}
            />
            <Text style={[styles.enrollText, { color: enrolled ? colors.mutedForeground : "#fff" }]}>
              {enrolled ? "Ro'yxatdan chiqish" : "Kursga yozilish"}
            </Text>
          </Pressable>

          {/* Lessons */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
              Kurs dasturi ({course.lessons.length} dars)
            </Text>
            {course.lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                isCompleted={isLessonCompleted(lesson.id)}
                isLocked={!enrolled}
                accentColor={colors.primary}
                onPress={() => router.push(`/lesson/${lesson.id}` as any)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {},
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  hero: { height: 200, overflow: "hidden", position: "relative" },
  heroImage: { width: "100%", height: "100%", resizeMode: "cover" },
  heroPlaceholder: { flex: 1, alignItems: "center", justifyContent: "center" },
  premiumOverlay: { position: "absolute", top: 12, right: 12 },
  premiumBadge: { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 },
  premiumText: { fontSize: 12, fontFamily: "Inter_700Bold", color: "#fff" },
  body: { padding: 20 },
  tagRow: { flexDirection: "row", gap: 8, marginBottom: 12 },
  catTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  catTagText: { fontSize: 12, fontFamily: "Inter_700Bold" },
  levelTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  levelTagText: { fontSize: 12, fontFamily: "Inter_600SemiBold" },
  freeTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  freeTagText: { fontSize: 12, fontFamily: "Inter_600SemiBold" },
  title: { fontSize: 22, fontFamily: "Inter_700Bold", marginBottom: 8, lineHeight: 28 },
  description: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 20, marginBottom: 16 },
  metaCard: { borderRadius: 14, borderWidth: 1, padding: 14, gap: 8, marginBottom: 24 },
  metaItem: { flexDirection: "row", alignItems: "center", gap: 8 },
  metaVal: { fontSize: 13, fontFamily: "Inter_500Medium" },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 17, fontFamily: "Inter_700Bold", marginBottom: 12 },
  topicsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  topicTag: { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, borderWidth: 1 },
  topicText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  progressCard: { borderRadius: 14, borderWidth: 1, padding: 16, marginBottom: 16, gap: 8 },
  progressHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  progressLabel: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  progressPct: { fontSize: 20, fontFamily: "Inter_700Bold" },
  progressTrack: { height: 6, borderRadius: 3, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 3 },
  progressSub: { fontSize: 12, fontFamily: "Inter_400Regular" },
  enrollBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 15,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 28,
  },
  enrollText: { fontSize: 16, fontFamily: "Inter_700Bold" },
});
