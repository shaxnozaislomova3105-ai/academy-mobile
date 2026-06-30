import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Lesson } from "@/data/courses";
import { useColors } from "@/hooks/useColors";

interface Props {
  lesson: Lesson;
  isCompleted: boolean;
  isLocked?: boolean;
  accentColor: string;
  onPress: () => void;
}

const TYPE_ICONS: Record<Lesson["type"], string> = {
  video: "play-circle",
  article: "file-text",
  quiz: "help-circle",
};

export const LessonItem: React.FC<Props> = ({
  lesson,
  isCompleted,
  isLocked = false,
  accentColor,
  onPress,
}) => {
  const colors = useColors();

  return (
    <Pressable
      onPress={isLocked ? undefined : onPress}
      style={({ pressed }) => [
        styles.row,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          opacity: isLocked ? 0.5 : pressed ? 0.85 : 1,
        },
      ]}
    >
      <View
        style={[
          styles.iconCircle,
          {
            backgroundColor: isCompleted
              ? accentColor + "20"
              : colors.muted,
          },
        ]}
      >
        {isCompleted ? (
          <Feather name="check" size={16} color={accentColor} />
        ) : isLocked ? (
          <Feather name="lock" size={14} color={colors.mutedForeground} />
        ) : (
          <Feather
            name={TYPE_ICONS[lesson.type] as any}
            size={15}
            color={colors.mutedForeground}
          />
        )}
      </View>

      <View style={styles.info}>
        <Text
          style={[
            styles.title,
            {
              color: isCompleted ? accentColor : colors.foreground,
            },
          ]}
          numberOfLines={1}
        >
          {lesson.order}. {lesson.title}
        </Text>
      </View>

      {!isLocked && (
        <Feather
          name={isCompleted ? "check-circle" : "chevron-right"}
          size={18}
          color={isCompleted ? accentColor : colors.mutedForeground}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 8,
    gap: 12,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  meta: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
});
