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
          style={[
            styles.compactAccent,
            { backgroundColor: course.color + "30" },
          ]}
        >
          {imageSource ? (
            <Image source={imageSource} style={styles.compactImage} />
          ) : (
            <View
              style={[styles.compactPlaceholder, { backgroundColor: course.color + "20" }]}
            >
              <Feather name="code" size={20} color={course.color} />
            </View>
          )}
        </View>
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
              <View
                style={[styles.progressTrack, { backgroundColor: colors.border }]}
              >
                <View
                  style={[
                    styles.progressFill,
                    {
                      backgroundColor: course.color,
                      width: `${progress}%` as any,
                    },
                  ]}
                />
              </View>
              <Text style={[styles.progressText, { color: colors.mutedForeground }]}>
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
          shadowColor: "#000",
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <View
        style={[
          styles.imageWrapper,
          { backgroundColor: course.color + "20" },
        ]}
      >
        {imageSource ? (
          <Image source={imageSource} style={styles.courseImage} />
        ) : (
          <View
            style={[styles.imagePlaceholder, { backgroundColor: course.color + "15" }]}
          >
            <Feather name="code" size={32} color={course.color} />
          </View>
        )}
        <View
          style={[styles.levelBadge, { backgroundColor: course.color + "22" }]}
        >
          <Text style={[styles.levelText, { color: course.color }]}>
            {course.level}
          </Text>
        </View>
      </View>

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
            <Feather name="book-open" size={13} color={colors.mutedForeground} />
            <Text style={[styles.metaText, { color: colors.mutedForeground }]}>
              {course.lessonsCount} dars
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Feather name="clock" size={13} color={colors.mutedForeground} />
            <Text style={[styles.metaText, { color: colors.mutedForeground }]}>
              {course.duration}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Feather name="star" size={13} color="#F59E0B" />
            <Text style={[styles.metaText, { color: colors.mutedForeground }]}>
              {course.rating}
            </Text>
          </View>
        </View>

        {showProgress && (
          <View style={styles.progressContainer}>
            <View style={styles.progressRow}>
              <View
                style={[styles.progressTrack, { backgroundColor: colors.border }]}
              >
                <View
                  style={[
                    styles.progressFill,
                    { backgroundColor: course.color, width: `${progress}%` as any },
                  ]}
                />
              </View>
              <Text style={[styles.progressText, { color: colors.mutedForeground }]}>
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
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: { elevation: 3 },
    }),
  },
  imageWrapper: {
    height: 160,
    position: "relative",
  },
  courseImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagePlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  levelBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  levelText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
  },
  body: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginBottom: 6,
    lineHeight: 22,
  },
  description: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
    marginBottom: 12,
  },
  meta: {
    flexDirection: "row",
    gap: 14,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
  progressContainer: {
    marginTop: 12,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  progressTrack: {
    flex: 1,
    height: 5,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    minWidth: 30,
  },
  compact: {
    flexDirection: "row",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 10,
    borderWidth: 1,
  },
  compactAccent: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  compactImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  compactPlaceholder: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  compactInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    gap: 4,
  },
  compactTitle: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    lineHeight: 18,
  },
  compactMeta: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
});
