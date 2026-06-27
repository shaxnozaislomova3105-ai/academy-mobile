import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CodePlayground } from "@/components/CodePlayground";
import { InAppBrowser } from "@/components/InAppBrowser";
import { NotesSection } from "@/components/NotesSection";
import { QuizSection } from "@/components/QuizSection";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useAcademy } from "@/context/AcademyContext";
import { COURSES } from "@/data/courses";
import { useColors } from "@/hooks/useColors";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { completeLesson, uncompleteLesson, isLessonCompleted } = useAcademy();
  const [activeLinkUrl, setActiveLinkUrl] = useState<string | null>(null);
  const [activeLinkTitle, setActiveLinkTitle] = useState("");

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
    const elements: React.ReactNode[] = [];
    const lines = content.split("\n");
    let inBlock = false;
    let blockLines: string[] = [];
    let blockLang = "";

    const flushBlock = (key: number) => {
      if (blockLines.length === 0) return;
      const isHtml = blockLang === "html";
      if (!isHtml) {
        elements.push(
          <View
            key={`block-${key}`}
            style={[styles.codeBlock, { backgroundColor: "#1E293B" }]}
          >
            <View style={[styles.codeBlockHeader, { backgroundColor: "#0F172A" }]}>
              <View style={styles.codeDots}>
                <View style={[styles.codeDot, { backgroundColor: "#FF5F56" }]} />
                <View style={[styles.codeDot, { backgroundColor: "#FFBD2E" }]} />
                <View style={[styles.codeDot, { backgroundColor: "#27C93F" }]} />
              </View>
              {blockLang ? (
                <Text style={styles.codeLang}>{blockLang.toUpperCase()}</Text>
              ) : null}
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.codeScroll}>
              <Text style={styles.codeText} selectable>
                {blockLines.join("\n")}
              </Text>
            </ScrollView>
          </View>
        );
      }
      blockLines = [];
      blockLang = "";
    };

    lines.forEach((line, i) => {
      if (line.startsWith("```")) {
        if (inBlock) {
          flushBlock(i);
          inBlock = false;
        } else {
          blockLang = line.slice(3).trim();
          inBlock = true;
        }
        return;
      }
      if (inBlock) {
        blockLines.push(line);
        return;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <Text key={i} style={[styles.bold, { color: colors.foreground }]}>
            {line.slice(2, -2)}
          </Text>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <View key={i} style={styles.bulletRow}>
            <Text style={[styles.bullet, { color: course.color }]}>•</Text>
            <Text style={[styles.bulletText, { color: colors.foreground }]}>
              {line.slice(2)}
            </Text>
          </View>
        );
      } else if (line.startsWith("# ")) {
        elements.push(
          <Text key={i} style={[styles.h1, { color: colors.foreground }]}>
            {line.slice(2)}
          </Text>
        );
      } else if (line.trim() === "") {
        elements.push(<View key={i} style={styles.spacer} />);
      } else if (line.includes("`") && !line.startsWith("```")) {
        const parts = line.split("`");
        elements.push(
          <Text key={i} style={[styles.paragraph, { color: colors.foreground }]}>
            {parts.map((p, j) =>
              j % 2 === 1 ? (
                <Text
                  key={j}
                  style={[styles.inlineCode, { backgroundColor: course.color + "18", color: course.color }]}
                >
                  {p}
                </Text>
              ) : (
                p
              )
            )}
          </Text>
        );
      } else {
        elements.push(
          <Text key={i} style={[styles.paragraph, { color: colors.foreground }]}>
            {line}
          </Text>
        );
      }
    });

    return elements;
  };

  const codeBlocks = (() => {
    const blocks: { code: string; lang: string }[] = [];
    let inBlock = false;
    let current = "";
    let lang = "";
    for (const line of lesson.content.split("\n")) {
      if (line.startsWith("```")) {
        if (inBlock) {
          // Only HTML blocks get the interactive playground
          if (lang === "html") {
            blocks.push({ code: current.trim(), lang });
          }
          current = "";
          lang = "";
          inBlock = false;
        } else {
          lang = line.slice(3).trim();
          inBlock = true;
        }
      } else if (inBlock) {
        current += line + "\n";
      }
    }
    return blocks;
  })();

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <InAppBrowser
        url={activeLinkUrl}
        title={activeLinkTitle}
        onClose={() => setActiveLinkUrl(null)}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View
        style={[
          styles.topBar,
          {
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
            paddingTop: Platform.OS === "web" ? insets.top + 67 : insets.top + 8,
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
          <Feather name="chevron-left" size={20} color={colors.foreground} />
        </Pressable>
        <Text style={[styles.topBarTitle, { color: colors.foreground }]} numberOfLines={1}>
          {lesson.order}. {lesson.title}
        </Text>
        <View style={styles.backBtn} />
      </View>

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
            {lesson.questions && lesson.questions.length > 0 && (
              <View style={[styles.quizBadge, { backgroundColor: course.color + "18", borderColor: course.color + "40" }]}>
                <Feather name="check-square" size={11} color={course.color} />
                <Text style={[styles.quizBadgeText, { color: course.color }]}>
                  {lesson.questions.length} ta test
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Video */}
        {lesson.videoUrl && (
          <VideoPlayer
            videoUrl={lesson.videoUrl}
            color={course.color}
            title={lesson.title}
          />
        )}

        {/* Content */}
        <View style={styles.body}>{renderContent(lesson.content)}</View>

        {/* Code playgrounds */}
        {codeBlocks.map((block, i) => (
          <CodePlayground
            key={i}
            code={block.code}
            language={block.lang}
            color={course.color}
          />
        ))}

        {/* Example project links */}
        {lesson.links && lesson.links.length > 0 && (
          <View style={[styles.linksCard, { backgroundColor: course.color + "08", borderColor: course.color + "25" }]}>
            <View style={styles.linksHeader}>
              <Feather name="globe" size={15} color={course.color} />
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
                  <Feather name="external-link" size={13} color={course.color} />
                </View>
                <View style={styles.linkInfo}>
                  <Text style={[styles.linkTitle, { color: colors.foreground }]} numberOfLines={1}>
                    {link.title}
                  </Text>
                  <Text style={[styles.linkUrl, { color: colors.mutedForeground }]} numberOfLines={1}>
                    {link.url.replace(/^https?:\/\//, "")}
                  </Text>
                </View>
                <Feather name="chevron-right" size={14} color={colors.mutedForeground} />
              </Pressable>
            ))}
          </View>
        )}

        {/* Quiz */}
        {lesson.questions && lesson.questions.length > 0 && (
          <QuizSection
            lessonId={lesson.id}
            questions={lesson.questions}
            color={course.color}
          />
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
              <Feather name="chevron-left" size={16} color={colors.foreground} />
              <Text style={[styles.navBtnText, { color: colors.foreground }]} numberOfLines={1}>
                {prevLesson.title}
              </Text>
            </Pressable>
          ) : (
            <View style={styles.navEmpty} />
          )}

          {/* Circle complete button */}
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
            <Feather
              name="check"
              size={20}
              color={completed ? "#fff" : colors.mutedForeground}
            />
          </Pressable>

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
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topBarTitle: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
  },
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
  lessonMetaRow: { flexDirection: "row", alignItems: "center", gap: 6, flexWrap: "wrap" },
  lessonDuration: { fontSize: 12, fontFamily: "Inter_400Regular" },
  lessonType: { fontSize: 12, fontFamily: "Inter_400Regular" },
  quizBadge: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, borderWidth: 1 },
  quizBadgeText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
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
  linksCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
    gap: 12,
  },
  linksHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  linksTitle: { fontSize: 14, fontFamily: "Inter_700Bold" },
  linksSub: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: -4 },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  linkIcon: { width: 32, height: 32, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  linkInfo: { flex: 1 },
  linkTitle: { fontSize: 13, fontFamily: "Inter_600SemiBold", marginBottom: 2 },
  linkUrl: { fontSize: 11, fontFamily: "Inter_400Regular" },
  circleBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  navRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 8 },
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
  codeBlock: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  codeBlockHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  codeDots: { flexDirection: "row", gap: 6 },
  codeDot: { width: 10, height: 10, borderRadius: 5 },
  codeLang: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    color: "#64748B",
    letterSpacing: 0.5,
  },
  codeScroll: { paddingHorizontal: 16, paddingVertical: 14 },
  codeText: {
    fontFamily: "Courier",
    fontSize: 13,
    lineHeight: 22,
    color: "#E2E8F0",
  },
});
