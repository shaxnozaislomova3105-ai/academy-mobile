import * as Haptics from "expo-haptics";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Check, ChevronLeft, ChevronRight, ExternalLink, Globe } from "lucide-react-native";
import React, { useEffect, useMemo, useState } from "react";
import {
  AppState,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CoursesError } from "@/components/CoursesError";
import { InAppBrowser } from "@/components/InAppBrowser";
import { LessonContent } from "@/components/LessonContent";
import { NotesSection } from "@/components/NotesSection";
import { QuizSection } from "@/components/QuizSection";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const {
    completeLesson, uncompleteLesson, isLessonCompleted, logLessonTime, isEnrolled,
    userDataLoaded, coursesLoading, coursesError, courses: allCourses,
  } = useAcademy();
  const [activeLinkUrl, setActiveLinkUrl] = useState<string | null>(null);
  const [activeLinkTitle, setActiveLinkTitle] = useState("");

  const { lesson, course, prevLesson, nextLesson } = useMemo(() => {
    for (const c of allCourses) {
      const idx = c.lessons.findIndex((l) => l.id === id);
      if (idx >= 0) {
        return {
          lesson: c.lessons[idx],
          course: c,
          prevLesson: idx > 0 ? c.lessons[idx - 1] : null,
          nextLesson: idx < c.lessons.length - 1 ? c.lessons[idx + 1] : null,
        };
      }
    }
    return { lesson: null, course: null, prevLesson: null, nextLesson: null };
  }, [id, allCourses]);

  // Yozilmagan kurs darsi havola orqali ochilsa, kurs sahifasiga qaytariladi
  const courseId = course?.id;
  const locked = !!courseId && userDataLoaded && !isEnrolled(courseId);
  useEffect(() => {
    if (locked) router.replace(`/course/${courseId}` as any);
  }, [locked, courseId]);

  // Darsda o'tkazilgan vaqt: ilova fonga o'tganda hisob to'xtaydi
  const lessonId = locked ? undefined : lesson?.id;
  useEffect(() => {
    if (!lessonId) return;
    let startedAt: number | null = Date.now();
    const flush = () => {
      if (startedAt === null) return;
      const seconds = Math.round((Date.now() - startedAt) / 1000);
      if (seconds >= 2) logLessonTime(lessonId, startedAt, seconds);
      startedAt = null;
    };
    const sub = AppState.addEventListener("change", (state) => {
      if (state !== "active") flush();
      else if (startedAt === null) startedAt = Date.now();
    });
    return () => {
      sub.remove();
      flush();
    };
  }, [lessonId, logLessonTime]);

  if (!lesson || !course || locked) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        {coursesError ? (
          <CoursesError />
        ) : (
          <Text style={{ color: colors.foreground }}>
            {coursesLoading || locked ? "Yuklanmoqda..." : "Dars topilmadi"}
          </Text>
        )}
      </View>
    );
  }

  const completed = isLessonCompleted(lesson.id);

  const handleToggleComplete = async () => {
    if (completed) {
      await uncompleteLesson(lesson.id);
    } else {
      await completeLesson(lesson.id);
      if (Platform.OS !== "web")
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <InAppBrowser
        url={activeLinkUrl}
        title={activeLinkTitle}
        onClose={() => setActiveLinkUrl(null)}
      />
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={[
          styles.topBar,
          {
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
            paddingTop: insets.top + 8,
          },
        ]}
      >
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.backBtn,
            { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <ChevronLeft size={20} color={colors.foreground} />
        </Pressable>
        <Text style={[styles.topBarTitle, { color: colors.foreground }]}>
          {lesson.order}. {lesson.title}
        </Text>
      </View>

      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Platform.OS === "web" ? insets.bottom + 34 : insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={[styles.lessonHeader, { borderColor: course.color + "30", backgroundColor: course.color + "08" }]}>
          <View style={styles.lessonMeta}>
            <View style={[styles.courseTag, { backgroundColor: course.color + "20" }]}>
              <Text style={[styles.courseTagText, { color: course.color }]}>
                {course.title}
              </Text>
            </View>
            <Text style={[styles.lessonNum, { color: colors.mutedForeground }]}>
              Dars {lesson.order} / {course.lessons.length}
            </Text>
          </View>
          <Text style={[styles.lessonTitle, { color: colors.foreground }]}>
            {lesson.title}
          </Text>
        </View>

        {/* Video */}
        {!!lesson.videoUrl && (
          <VideoPlayer videoUrl={lesson.videoUrl} color={course.color} title={lesson.title} />
        )}

        {/* Content */}
        <LessonContent content={lesson.content} color={course.color} />

        {/* Example project links */}
        {lesson.links && lesson.links.length > 0 && (
          <View style={[styles.linksCard, { backgroundColor: course.color + "08", borderColor: course.color + "25" }]}>
            <View style={styles.linksHeader}>
              <Globe size={15} color={course.color} />
              <Text style={[styles.linksTitle, { color: course.color }]}>
                Namuna loyihalar
              </Text>
            </View>
            <Text style={[styles.linksSub, { color: colors.mutedForeground }]}>
              Ilhom olish uchun quyidagi saytlarni ko'ring:
            </Text>
            {lesson.links.map((link, i) => (
              <Pressable
                key={i}
                onPress={() => { setActiveLinkTitle(link.title); setActiveLinkUrl(link.url); }}
                style={({ pressed }) => [
                  styles.linkRow,
                  { borderColor: colors.border, backgroundColor: colors.card, opacity: pressed ? 0.8 : 1 },
                ]}
              >
                <View style={[styles.linkIcon, { backgroundColor: course.color + "15" }]}>
                  <ExternalLink size={13} color={course.color} />
                </View>
                <View style={styles.linkInfo}>
                  <Text style={[styles.linkTitle, { color: colors.foreground }]} numberOfLines={1}>
                    {link.title}
                  </Text>
                  <Text style={[styles.linkUrl, { color: colors.mutedForeground }]} numberOfLines={1}>
                    {link.url.replace(/^https?:\/\//, "")}
                  </Text>
                </View>
                <ChevronRight size={14} color={colors.mutedForeground} />
              </Pressable>
            ))}
          </View>
        )}

        {/* Quiz */}
        {lesson.questions && lesson.questions.length > 0 && (
          <QuizSection lessonId={lesson.id} questions={lesson.questions} color={course.color} />
        )}

        {/* Notes */}
        <NotesSection lessonId={lesson.id} color={course.color} />

        {/* Navigation + complete button */}
        <View style={styles.navRow}>
          {prevLesson ? (
            <Pressable
              onPress={() => router.replace(`/lesson/${prevLesson.id}` as any)}
              style={[styles.navBtn, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <ChevronLeft size={16} color={colors.foreground} />
              <Text style={[styles.navBtnText, { color: colors.foreground }]} numberOfLines={1}>
                {prevLesson.title}
              </Text>
            </Pressable>
          ) : (
            <View style={styles.navEmpty} />
          )}

          <Pressable
            onPress={handleToggleComplete}
            style={({ pressed }) => [
              styles.circleBtn,
              {
                backgroundColor: completed ? "#22C55E" : colors.card,
                borderColor: completed ? "#22C55E" : colors.border,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Check size={20} color={completed ? "#fff" : colors.mutedForeground} />
          </Pressable>

          {nextLesson ? (
            <Pressable
              onPress={() => router.replace(`/lesson/${nextLesson.id}` as any)}
              style={[styles.navBtn, styles.navBtnRight, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <Text style={[styles.navBtnText, { color: colors.foreground }]} numberOfLines={1}>
                {nextLesson.title}
              </Text>
              <ChevronRight size={16} color={colors.foreground} />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => router.back()}
              style={[styles.navBtn, styles.navBtnRight, { backgroundColor: course.color + "20", borderColor: course.color + "30" }]}
            >
              <Text style={[styles.navBtnText, { color: course.color }]}>
                Kursga qaytish
              </Text>
              <Check size={16} color={course.color} />
            </Pressable>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  topBar: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingBottom: 12, borderBottomWidth: 1, gap: 12 },
  backBtn: { width: 38, height: 38, borderRadius: 10, borderWidth: 1, alignItems: "center", justifyContent: "center" },
  topBarTitle: { flex: 1, fontSize: 15, fontFamily: "Inter_600SemiBold", textAlign: "center" },
  container: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 16 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  lessonHeader: { borderRadius: 16, borderWidth: 1, padding: 16, marginBottom: 24, gap: 8 },
  lessonMeta: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  courseTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  courseTagText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  lessonNum: { fontSize: 12, fontFamily: "Inter_400Regular" },
  lessonTitle: { fontSize: 20, fontFamily: "Inter_700Bold", lineHeight: 26 },
  linksCard: { borderRadius: 16, borderWidth: 1, padding: 16, marginBottom: 20, gap: 12 },
  linksHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  linksTitle: { fontSize: 14, fontFamily: "Inter_700Bold" },
  linksSub: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: -4 },
  linkRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderRadius: 12, borderWidth: 1 },
  linkIcon: { width: 32, height: 32, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  linkInfo: { flex: 1 },
  linkTitle: { fontSize: 13, fontFamily: "Inter_600SemiBold", marginBottom: 2 },
  linkUrl: { fontSize: 11, fontFamily: "Inter_400Regular" },
  circleBtn: { width: 48, height: 48, borderRadius: 24, borderWidth: 1.5, alignItems: "center", justifyContent: "center" },
  navRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 8 },
  navBtn: { flex: 1, flexDirection: "row", alignItems: "center", gap: 6, padding: 14, borderRadius: 12, borderWidth: 1 },
  navBtnRight: { justifyContent: "flex-end" },
  navBtnText: { flex: 1, fontSize: 13, fontFamily: "Inter_500Medium" },
  navEmpty: { flex: 1 },
});
