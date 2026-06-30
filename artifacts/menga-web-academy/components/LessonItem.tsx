import { Check, CheckCircle, ChevronRight, FileText, HelpCircle, Lock, PlayCircle } from "lucide-react-native";
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

type IconComp = React.ComponentType<{ size: number; color: string }>;

const TYPE_ICON_MAP: Record<Lesson["type"], IconComp> = {
  video: PlayCircle,
  article: FileText,
  quiz: HelpCircle,
};

export const LessonItem: React.FC<Props> = ({
  lesson,
  isCompleted,
  isLocked = false,
  accentColor,
  onPress,
}) => {
  const colors = useColors();
  const TypeIcon = TYPE_ICON_MAP[lesson.type];

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
          <Check size={16} color={accentColor} />
        ) : isLocked ? (
          <Lock size={14} color={colors.mutedForeground} />
        ) : (
          <TypeIcon size={15} color={colors.mutedForeground} />
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
        isCompleted
          ? <CheckCircle size={18} color={accentColor} />
          : <ChevronRight size={18} color={colors.mutedForeground} />
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
});
