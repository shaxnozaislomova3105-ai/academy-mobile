import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Image,
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

export const CourseCard: React.FC<Props> = ({
  course,
  onPress,
  showProgress,
  progress = 0,
  compact = false,
}) => {
  const colors = useColors();
  const imageSource = course.image ? IMAGES[course.image] : null;
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
        <View
          style={[styles.compactThumb, { backgroundColor: course.color + "18" }]}
        >
          {imageSource ? (
            <Image source={imageSource} style={styles.compactImage} />
          ) : (
            <Text style={[styles.compactEmoji, { color: course.color }]}>
              {"</>"}
            </Text>
          )}
        </View>
        <View style={styles.compactInfo}>
          <View style={styles.compactTitleRow}>
            <Text
              style={[styles.compactTitle, { color: colors.foreground }]}
              numberOfLines={2}
            >
              {course.title}
            </Text>
            {course.isPremium && (
              <View style={[styles.premiumDot, { backgroundColor: colors.premium }]} />
            )}
          </View>
          <Text style={[styles.compactMeta, { color: colors.mutedForeground }]}>
            {course.lessonsCount} dars · {course.duration}
          </Text>
          {showProgress && (
            <View style={styles.progressRow}>
              <View
                style={[styles.progressTrack, { backgroundColor: colors.border }]}
              >
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
      {/* Thumbnail */}
      <View style={[styles.thumb, { backgroundColor: course.color + "12" }]}>
        {imageSource ? (
          <Image source={imageSource} style={styles.thumbImage} />
        ) : (
          <View style={styles.thumbPlaceholder}>
            <Feather name="book-open" size={28} color={course.color} />
          </View>
        )}

        {/* Badges */}
        <View style={styles.thumbBadges}>
          <View style={[styles.badge, { backgroundColor: colors.card + "F0" }]}>
            <Text style={[styles.badgeCat, { color: course.color }]}>
              {course.category}
            </Text>
          </View>
          {course.isPremium && (
            <View style={[styles.badge, { backgroundColor: "#F59E0B" }]}>
              <Feather name="lock" size={10} color="#fff" />
              <Text style={styles.badgePremium}>Premium</Text>
            </View>
          )}
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

      {/* Body */}
      <View style={styles.body}>
        <Text
          style={[styles.title, { color: colors.foreground }]}
          numberOfLines={2}
        >
          {course.title}
        </Text>
        <Text
          style={[styles.description, { color: colors.mutedForeground }]}
          numberOfLines={2}
        >
          {course.description}
        </Text>

        <View style={styles.meta}>
          <View style={styles.metaItem}>
            <Feather name="book-open" size={12} color={colors.mutedForeground} />
            <Text style={[styles.metaTxt, { color: colors.mutedForeground }]}>
              {course.lessonsCount} dars
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Feather name="clock" size={12} color={colors.mutedForeground} />
            <Text style={[styles.metaTxt, { color: colors.mutedForeground }]}>
              {course.duration}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Feather name="star" size={12} color="#F59E0B" />
            <Text style={[styles.metaTxt, { color: colors.mutedForeground }]}>
              {course.rating}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Feather name="users" size={12} color={colors.mutedForeground} />
            <Text style={[styles.metaTxt, { color: colors.mutedForeground }]}>
              {course.studentsCount.toLocaleString()}
            </Text>
          </View>
        </View>

        {showProgress && (
          <View style={styles.progressWrap}>
            <View style={styles.progressRow}>
              <View
                style={[styles.progressTrack, { backgroundColor: colors.border }]}
              >
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
  thumb: { height: 150, position: "relative" },
  thumbImage: { width: "100%", height: "100%", resizeMode: "cover" },
  thumbPlaceholder: { flex: 1, alignItems: "center", justifyContent: "center" },
  thumbBadges: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    gap: 6,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeCat: { fontSize: 11, fontFamily: "Inter_700Bold" },
  badgePremium: { fontSize: 11, fontFamily: "Inter_700Bold", color: "#fff" },
  levelBadge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  levelText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  body: { padding: 14 },
  title: { fontSize: 15, fontFamily: "Inter_700Bold", marginBottom: 4, lineHeight: 21 },
  description: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 18, marginBottom: 10 },
  meta: { flexDirection: "row", gap: 10, flexWrap: "wrap" },
  metaItem: { flexDirection: "row", alignItems: "center", gap: 4 },
  metaTxt: { fontSize: 11, fontFamily: "Inter_400Regular" },
  progressWrap: { marginTop: 10 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  progressTrack: { flex: 1, height: 5, borderRadius: 3, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 3 },
  progressPct: { fontSize: 11, fontFamily: "Inter_600SemiBold", minWidth: 28 },
  compact: {
    flexDirection: "row",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 10,
    borderWidth: 1,
  },
  compactThumb: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  compactImage: { width: 80, height: 80, resizeMode: "cover" },
  compactEmoji: { fontSize: 16, fontFamily: "Inter_700Bold" },
  compactInfo: { flex: 1, padding: 12, justifyContent: "center", gap: 4 },
  compactTitleRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  compactTitle: { flex: 1, fontSize: 14, fontFamily: "Inter_600SemiBold", lineHeight: 18 },
  premiumDot: { width: 8, height: 8, borderRadius: 4 },
  compactMeta: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
