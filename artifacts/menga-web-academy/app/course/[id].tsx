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

  const handleEnroll = async () => {
    if (enrolled) {
      await unenrollCourse(course.id);
    } else {
      await enrollCourse(course.id);
      if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
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
        }}
      />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={[
          styles.content,
          {
            paddingBottom:
              Platform.OS === "web"
                ? insets.bottom + 34
                : insets.bottom + 24,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View
          style={[styles.hero, { backgroundColor: course.color + "20" }]}
        >
          {imageSource ? (
            <Image source={imageSource} style={styles.heroImage} />
          ) : (
            <View style={styles.heroPlaceholder}>
              <Feather name="code" size={48} color={course.color} />
            </View>
          )}
        </View>

        <View style={styles.body}>
          {/* Level Badge */}
          <View style={[styles.levelBadge, { backgroundColor: course.color + "18" }]}>
            <Text style={[styles.levelText, { color: course.color }]}>
              {course.level}
            </Text>
          </View>

          <Text style={[styles.title, { color: colors.foreground }]}>
            {course.title}
          </Text>
          <Text style={[styles.description, { color: colors.mutedForeground }]}>
            {course.description}
          </Text>

          {/* Meta chips */}
          <View style={styles.metaRow}>
            {[
              { icon: "user", val: course.instructor },
              { icon: "book-open", val: `${course.lessonsCount} dars` },
              { icon: "clock", val: course.duration },
              { icon: "star", val: `${course.rating}` },
              { icon: "users", val: `${course.studentsCount.toLocaleString()}` },
            ].map((m) => (
              <View
                key={m.icon}
                style={[styles.metaChip, { backgroundColor: colors.muted }]}
              >
                <Feather name={m.icon as any} size={12} color={colors.mutedForeground} />
                <Text style={[styles.metaChipText, { color: colors.mutedForeground }]}>
                  {m.val}
                </Text>
              </View>
            ))}
          </View>

          {/* Topics */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
              Mavzular
            </Text>
            <View style={styles.topicsRow}>
              {course.topics.map((t) => (
                <View
                  key={t}
                  style={[styles.topicTag, { backgroundColor: course.color + "15", borderColor: course.color + "30" }]}
                >
                  <Text style={[styles.topicText, { color: course.color }]}>
                    {t}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Progress (if enrolled) */}
          {enrolled && (
            <View
              style={[styles.progressCard, { backgroundColor: course.color + "12", borderColor: course.color + "25" }]}
            >
              <View style={styles.progressHeader}>
                <Text style={[styles.progressLabel, { color: colors.foreground }]}>
                  Sizning progressingiz
                </Text>
                <Text style={[styles.progressPct, { color: course.color }]}>
                  {progress}%
                </Text>
              </View>
              <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
                <View
                  style={[
                    styles.progressFill,
                    { backgroundColor: course.color, width: `${progress}%` as any },
                  ]}
                />
              </View>
            </View>
          )}

          {/* Enroll button */}
          <Pressable
            onPress={handleEnroll}
            style={({ pressed }) => [
              styles.enrollBtn,
              {
                backgroundColor: enrolled ? colors.muted : course.color,
                opacity: pressed ? 0.85 : 1,
              },
            ]}
          >
            <Feather
              name={enrolled ? "check-circle" : "play-circle"}
              size={18}
              color={enrolled ? colors.mutedForeground : "#fff"}
            />
            <Text
              style={[
                styles.enrollText,
                { color: enrolled ? colors.mutedForeground : "#fff" },
              ]}
            >
              {enrolled ? "Ro'yxatdan chiqish" : "Kursga yozilish"}
            </Text>
          </Pressable>

          {/* Lessons */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
              Darslar ({course.lessons.length})
            </Text>
            {course.lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                isCompleted={isLessonCompleted(lesson.id)}
                isLocked={!enrolled}
                accentColor={course.color}
                onPress={() =>
                  router.push(`/lesson/${lesson.id}` as any)
                }
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
  hero: { height: 200, overflow: "hidden" },
  heroImage: { width: "100%", height: "100%", resizeMode: "cover" },
  heroPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: { padding: 20 },
  levelBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 10,
  },
  levelText: { fontSize: 12, fontFamily: "Inter_600SemiBold" },
  title: { fontSize: 24, fontFamily: "Inter_700Bold", marginBottom: 8, lineHeight: 30 },
  description: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    marginBottom: 16,
  },
  metaRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 24 },
  metaChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  metaChipText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontFamily: "Inter_700Bold", marginBottom: 12 },
  topicsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  topicTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  topicText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  progressCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    gap: 10,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressLabel: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  progressPct: { fontSize: 20, fontFamily: "Inter_700Bold" },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: { height: "100%", borderRadius: 3 },
  enrollBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 28,
  },
  enrollText: { fontSize: 16, fontFamily: "Inter_700Bold" },
});
