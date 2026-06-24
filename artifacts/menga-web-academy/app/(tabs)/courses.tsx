import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryChip } from "@/components/CategoryChip";
import { CourseCard } from "@/components/CourseCard";
import { CATEGORIES, COURSES } from "@/data/courses";
import { useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";

export default function CoursesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { isEnrolled, getCourseProgress } = useAcademy();
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filtered = COURSES.filter(
    (c) => activeCategory === "Barchasi" || c.category === activeCategory
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop:
            Platform.OS === "web"
              ? insets.top + 67
              : insets.top + 16,
          paddingBottom:
            Platform.OS === "web"
              ? insets.bottom + 34 + 84
              : insets.bottom + 100,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.pageTitle, { color: colors.foreground }]}>
        Kurslar
      </Text>

      <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
        {COURSES.length} ta kurs mavjud
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chips}
        style={styles.chipsScroll}
      >
        {CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat}
            label={cat}
            selected={activeCategory === cat}
            onPress={() => setActiveCategory(cat)}
          />
        ))}
      </ScrollView>

      <View style={styles.results}>
        <Text style={[styles.resultCount, { color: colors.mutedForeground }]}>
          {filtered.length} ta kurs
        </Text>
      </View>

      {filtered.map((course) => {
        const enrolled = isEnrolled(course.id);
        const progress = getCourseProgress(course.id);
        return (
          <CourseCard
            key={course.id}
            course={course}
            onPress={() => router.push(`/course/${course.id}` as any)}
            showProgress={enrolled}
            progress={progress}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20 },
  pageTitle: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    marginBottom: 16,
  },
  chipsScroll: { marginBottom: 4 },
  chips: { paddingBottom: 16, paddingRight: 20 },
  results: { marginBottom: 12 },
  resultCount: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
  },
});
