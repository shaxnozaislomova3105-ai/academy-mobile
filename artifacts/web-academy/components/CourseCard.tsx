import { LinearGradient } from "expo-linear-gradient";
import { BookOpen, Code, Layers, Layout, Package, Server, Zap } from "lucide-react-native";
import React from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Course } from "@/data/courses";
import { useColors } from "@/hooks/useColors";

interface Props {
  course: Course;
  onPress: () => void;
  showProgress?: boolean;
  progress?: number;
  compact?: boolean;
}

const LEVEL_COLORS: Record<string, string> = {
  "Boshlang'ich": "#22C55E",
  "O'rta": "#F59E0B",
  "Murakkab": "#EF4444",
};

type IconComp = React.ComponentType<{ size: number; color: string }>;

const CATEGORY_META: Record<string, { Icon: IconComp; label: string; sub: string }> = {
  HTML: { Icon: Code, label: "HTML", sub: "WEB DEVELOPMENT" },
  CSS: { Icon: Layout, label: "CSS", sub: "STYLING & DESIGN" },
  JavaScript: { Icon: Zap, label: "JS", sub: "PROGRAMMING" },
  React: { Icon: Layers, label: "REACT", sub: "UI LIBRARY" },
  "Node.js": { Icon: Server, label: "NODE", sub: "BACKEND DEV" },
  "Full-Stack": { Icon: Package, label: "FULL", sub: "STACK DEV" },
};

function CourseThumbnail({ course, height = 150 }: { course: Course; height?: number }) {
  const meta = CATEGORY_META[course.category] ?? { Icon: BookOpen, label: course.category, sub: "COURSE" };
  const c = course.color;

  return (
    <View style={{ height, position: "relative", overflow: "hidden", backgroundColor: c + "10" }}>
      <LinearGradient
        colors={[c + "20", c + "06"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Book shape */}
      <View style={[thumbStyles.book, { backgroundColor: c }]}>
        <LinearGradient
          colors={[c + "CC", c]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
        <View style={thumbStyles.spine} />
        <View style={[thumbStyles.badge, { backgroundColor: "#ffffff22" }]}>
          <meta.Icon size={22} color="#fff" />
        </View>
        <View style={thumbStyles.lines}>
          <View style={[thumbStyles.line, { backgroundColor: "#ffffff50", width: "70%" }]} />
          <View style={[thumbStyles.line, { backgroundColor: "#ffffff30", width: "50%" }]} />
          <View style={[thumbStyles.line, { backgroundColor: "#ffffff20", width: "60%" }]} />
        </View>
      </View>

      {/* Text side */}
      <View style={thumbStyles.textSide}>
        <Text style={[thumbStyles.catLabel, { color: c }]}>{meta.label}</Text>
        <Text style={[thumbStyles.catSub, { color: c + "CC" }]}>{meta.sub}</Text>
        <Text style={[thumbStyles.catCourse, { color: c + "99" }]}>COURSE</Text>
        <View style={[thumbStyles.underline, { backgroundColor: c }]} />
      </View>
    </View>
  );
}

function CompactThumbnail({ course }: { course: Course }) {
  const meta = CATEGORY_META[course.category] ?? { Icon: BookOpen, label: course.category, sub: "" };
  const c = course.color;
  return (
    <View style={[styles.compactThumb, { backgroundColor: c + "12", overflow: "hidden" }]}>
      <LinearGradient
        colors={[c + "25", c + "08"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={[styles.compactIcon, { backgroundColor: c }]}>
        <meta.Icon size={16} color="#fff" />
      </View>
      <Text style={[styles.compactLabel, { color: c }]} numberOfLines={1}>
        {meta.label}
      </Text>
    </View>
  );
}

export const CourseCard: React.FC<Props> = ({
  course,
  onPress,
  showProgress,
  progress = 0,
  compact = false,
}) => {
  const colors = useColors();
  const levelColor = LEVEL_COLORS[course.level] ?? colors.primary;

  if (compact) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.compact,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            opacity: pressed ? 0.85 : 1,
          },
        ]}
      >
        <CompactThumbnail course={course} />
        <View style={styles.compactInfo}>
          <Text
            style={[styles.compactTitle, { color: colors.foreground }]}
            numberOfLines={2}
          >
            {course.title}
          </Text>
          <Text style={[styles.compactMeta, { color: colors.mutedForeground }]}>
            {course.lessonsCount} dars · {course.duration}
          </Text>
          {showProgress && (
            <View style={styles.progressRow}>
              <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
                <View
                  style={[
                    styles.progressFill,
                    { backgroundColor: colors.primary, width: `${progress}%` as any },
                  ]}
                />
              </View>
              <Text style={[styles.progressPct, { color: colors.mutedForeground }]}>
                {progress}%
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          shadowColor: "#000",
          opacity: pressed ? 0.92 : 1,
        },
      ]}
    >
      <View style={{ position: "relative" }}>
        <CourseThumbnail course={course} height={150} />

        <View style={styles.thumbBadges}>
          <View style={[styles.badge, { backgroundColor: colors.card + "F2" }]}>
            <Text style={[styles.badgeCat, { color: course.color }]}>
              {course.category}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.levelBadge,
            { backgroundColor: levelColor + "22", borderColor: levelColor + "40" },
          ]}
        >
          <Text style={[styles.levelText, { color: levelColor }]}>
            {course.level}
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={[styles.title, { color: colors.foreground }]} numberOfLines={2}>
          {course.title}
        </Text>
        <Text
          style={[styles.description, { color: colors.mutedForeground }]}
          numberOfLines={2}
        >
          {course.description}
        </Text>

        {showProgress && (
          <View style={styles.progressWrap}>
            <View style={styles.progressRow}>
              <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
                <View
                  style={[
                    styles.progressFill,
                    { backgroundColor: colors.primary, width: `${progress}%` as any },
                  ]}
                />
              </View>
              <Text style={[styles.progressPct, { color: colors.mutedForeground }]}>
                {progress}%
              </Text>
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const thumbStyles = StyleSheet.create({
  book: {
    position: "absolute",
    left: 28,
    top: "50%",
    marginTop: -44,
    width: 72,
    height: 88,
    borderRadius: 6,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.25, shadowRadius: 8 },
      android: { elevation: 6 },
    }),
  },
  spine: { position: "absolute", left: 0, top: 0, bottom: 0, width: 8, backgroundColor: "#00000020" },
  badge: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center", marginBottom: 6 },
  lines: { gap: 5, alignItems: "flex-start", paddingHorizontal: 10, width: "100%" },
  line: { height: 3, borderRadius: 2 },
  textSide: { position: "absolute", left: 120, top: "50%", marginTop: -38 },
  catLabel: { fontSize: 26, fontFamily: "Inter_700Bold", letterSpacing: -0.5, lineHeight: 30 },
  catSub: { fontSize: 9, fontFamily: "Inter_700Bold", letterSpacing: 1, lineHeight: 13 },
  catCourse: { fontSize: 9, fontFamily: "Inter_700Bold", letterSpacing: 1, lineHeight: 13 },
  underline: { height: 3, width: 40, borderRadius: 2, marginTop: 6 },
});

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 14,
    borderWidth: 1,
    ...Platform.select({
      ios: { shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 10 },
      android: { elevation: 2 },
    }),
  },
  thumbBadges: { position: "absolute", top: 10, left: 10, flexDirection: "row", gap: 6 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  badgeCat: { fontSize: 11, fontFamily: "Inter_700Bold" },
  levelBadge: { position: "absolute", bottom: 10, right: 10, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, borderWidth: 1 },
  levelText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  body: { padding: 14 },
  title: { fontSize: 15, fontFamily: "Inter_700Bold", marginBottom: 4, lineHeight: 21 },
  description: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 18, marginBottom: 10 },
  progressWrap: { marginTop: 10 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  progressTrack: { flex: 1, height: 5, borderRadius: 3, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 3 },
  progressPct: { fontSize: 11, fontFamily: "Inter_600SemiBold", minWidth: 28 },
  compact: { flexDirection: "row", borderRadius: 14, overflow: "hidden", marginBottom: 10, borderWidth: 1 },
  compactThumb: { width: 80, height: 80, alignItems: "center", justifyContent: "center", gap: 4 },
  compactIcon: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  compactLabel: { fontSize: 10, fontFamily: "Inter_700Bold", letterSpacing: 0.5 },
  compactInfo: { flex: 1, padding: 12, justifyContent: "center", gap: 4 },
  compactTitle: { fontSize: 14, fontFamily: "Inter_600SemiBold", lineHeight: 18 },
  compactMeta: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
