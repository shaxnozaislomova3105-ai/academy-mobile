import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAcademy } from "@/context/AcademyContext";
import { COURSES } from "@/data/courses";
import { useColors } from "@/hooks/useColors";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { completeLesson, uncompleteLesson, isLessonCompleted } = useAcademy();

  const { lesson, course, prevLesson, nextLesson } = useMemo(() => {
    for (const c of COURSES) {
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
  }, [id]);

  if (!lesson || !course) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.foreground }}>Dars topilmadi</Text>
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

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("```")) {
        return null;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <Text key={i} style={[styles.bold, { color: colors.foreground }]}>
            {line.slice(2, -2)}
          </Text>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <View key={i} style={styles.bulletRow}>
            <Text style={[styles.bullet, { color: course.color }]}>•</Text>
            <Text style={[styles.bulletText, { color: colors.foreground }]}>
              {line.slice(2)}
            </Text>
          </View>
        );
      }
      if (line.startsWith("# ")) {
        return (
          <Text key={i} style={[styles.h1, { color: colors.foreground }]}>
            {line.slice(2)}
          </Text>
        );
      }
      if (line.trim() === "") {
        return <View key={i} style={styles.spacer} />;
      }
      if (line.includes("`") && !line.startsWith("```")) {
        const parts = line.split("`");
        return (
          <Text key={i} style={[styles.paragraph, { color: colors.foreground }]}>
            {parts.map((p, j) =>
              j % 2 === 1 ? (
                <Text
                  key={j}
                  style={[
                    styles.inlineCode,
                    {
                      backgroundColor: course.color + "18",
                      color: course.color,
                    },
                  ]}
                >
                  {p}
                </Text>
              ) : (
                p
              )
            )}
          </Text>
        );
      }
      return (
        <Text key={i} style={[styles.paragraph, { color: colors.foreground }]}>
          {line}
        </Text>
      );
    });
  };

  const codeBlocks = (() => {
    const blocks: string[] = [];
    let inBlock = false;
    let current = "";
    for (const line of lesson.content.split("\n")) {
      if (line.startsWith("```")) {
        if (inBlock) {
          blocks.push(current.trim());
          current = "";
          inBlock = false;
        } else {
          inBlock = true;
        }
      } else if (inBlock) {
        current += line + "\n";
      }
    }
    return blocks;
  })();

  return (
    <>
      <Stack.Screen
        options={{
          title: `${lesson.order}. Dars`,
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
        {/* Header */}
        <View
          style={[styles.lessonHeader, { borderColor: course.color + "30", backgroundColor: course.color + "08" }]}
        >
          <View style={styles.lessonMeta}>
            <View
              style={[styles.courseTag, { backgroundColor: course.color + "20" }]}
            >
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
          <View style={styles.lessonMetaRow}>
            <Feather name="clock" size={13} color={colors.mutedForeground} />
            <Text style={[styles.lessonDuration, { color: colors.mutedForeground }]}>
              {lesson.duration}
            </Text>
            <View style={[styles.dot, { backgroundColor: colors.mutedForeground }]} />
            <Text style={[styles.lessonType, { color: colors.mutedForeground }]}>
              {lesson.type === "video" ? "Video" : lesson.type === "quiz" ? "Test" : "Maqola"}
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.body}>{renderContent(lesson.content)}</View>

        {/* Code blocks */}
        {codeBlocks.map((block, i) => (
          <View
            key={i}
            style={[
              styles.codeBlock,
              { backgroundColor: colors.navyDark ?? "#0D1117", borderColor: course.color + "30" },
            ]}
          >
            <View style={styles.codeHeader}>
              <View style={styles.codeDots}>
                {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                  <View key={c} style={[styles.codeDot, { backgroundColor: c }]} />
                ))}
              </View>
            </View>
            <Text style={styles.codeText}>{block}</Text>
          </View>
        ))}

        {/* Complete button */}
        <Pressable
          onPress={handleToggleComplete}
          style={({ pressed }) => [
            styles.completeBtn,
            {
              backgroundColor: completed ? "#22C55E" : course.color,
              opacity: pressed ? 0.85 : 1,
            },
          ]}
        >
          <Feather name={completed ? "check-circle" : "circle"} size={20} color="#fff" />
          <Text style={styles.completeBtnText}>
            {completed ? "Bajarildi!" : "Bajarildi deb belgilash"}
          </Text>
        </Pressable>

        {/* Navigation */}
        <View style={styles.navRow}>
          {prevLesson ? (
            <Pressable
              onPress={() => router.replace(`/lesson/${prevLesson.id}` as any)}
              style={[styles.navBtn, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <Feather name="chevron-left" size={16} color={colors.foreground} />
              <Text style={[styles.navBtnText, { color: colors.foreground }]} numberOfLines={1}>
                {prevLesson.title}
              </Text>
            </Pressable>
          ) : (
            <View style={styles.navEmpty} />
          )}

          {nextLesson ? (
            <Pressable
              onPress={() => router.replace(`/lesson/${nextLesson.id}` as any)}
              style={[styles.navBtn, styles.navBtnRight, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <Text style={[styles.navBtnText, { color: colors.foreground }]} numberOfLines={1}>
                {nextLesson.title}
              </Text>
              <Feather name="chevron-right" size={16} color={colors.foreground} />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => router.back()}
              style={[styles.navBtn, styles.navBtnRight, { backgroundColor: course.color + "20", borderColor: course.color + "30" }]}
            >
              <Text style={[styles.navBtnText, { color: course.color }]}>
                Kursga qaytish
              </Text>
              <Feather name="check" size={16} color={course.color} />
            </Pressable>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 16 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  lessonHeader: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 24,
    gap: 8,
  },
  lessonMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  courseTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  courseTagText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  lessonNum: { fontSize: 12, fontFamily: "Inter_400Regular" },
  lessonTitle: { fontSize: 20, fontFamily: "Inter_700Bold", lineHeight: 26 },
  lessonMetaRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  lessonDuration: { fontSize: 12, fontFamily: "Inter_400Regular" },
  lessonType: { fontSize: 12, fontFamily: "Inter_400Regular" },
  dot: { width: 3, height: 3, borderRadius: 1.5 },
  body: { marginBottom: 24 },
  paragraph: { fontSize: 15, fontFamily: "Inter_400Regular", lineHeight: 24, marginBottom: 4 },
  bold: { fontSize: 15, fontFamily: "Inter_700Bold", marginBottom: 8 },
  h1: { fontSize: 20, fontFamily: "Inter_700Bold", marginBottom: 12 },
  bulletRow: { flexDirection: "row", gap: 8, marginBottom: 4 },
  bullet: { fontSize: 18, lineHeight: 24 },
  bulletText: { flex: 1, fontSize: 15, fontFamily: "Inter_400Regular", lineHeight: 24 },
  spacer: { height: 8 },
  inlineCode: {
    fontFamily: "Inter_500Medium",
    fontSize: 13,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  codeBlock: {
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 20,
    overflow: "hidden",
  },
  codeHeader: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },
  codeDots: { flexDirection: "row", gap: 6 },
  codeDot: { width: 10, height: 10, borderRadius: 5 },
  codeText: {
    color: "#E6EDF3",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    padding: 16,
  },
  completeBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 20,
  },
  completeBtnText: { color: "#fff", fontSize: 16, fontFamily: "Inter_700Bold" },
  navRow: { flexDirection: "row", gap: 10, marginBottom: 8 },
  navBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  navBtnRight: { justifyContent: "flex-end" },
  navBtnText: {
    flex: 1,
    fontSize: 13,
    fontFamily: "Inter_500Medium",
  },
  navEmpty: { flex: 1 },
});
