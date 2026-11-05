import { useLocalSearchParams, useRouter } from "expo-router";
import { Search, X } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryChip } from "@/components/CategoryChip";
import { CourseCard } from "@/components/CourseCard";
import { CoursesError } from "@/components/CoursesError";
import { CATEGORIES, CourseStage, STAGE_LABELS } from "@/data/courses";
import { useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";

const STAGES: CourseStage[] = [1, 2, 3];

export default function CoursesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { isEnrolled, getCourseProgress, courses, coursesError } = useAcademy();
  const { category } = useLocalSearchParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState(category || "Barchasi");
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  const filtered = courses.filter((c) => {
    const matchesCat = activeCategory === "Barchasi" || c.category === activeCategory;
    const matchesSearch =
      search.length === 0 ||
      c.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: Platform.OS === "web" ? insets.top + 67 : insets.top + 16,
          paddingBottom: Platform.OS === "web" ? insets.bottom + 34 + 84 : insets.bottom + 100,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={[styles.pageTitle, { color: colors.foreground }]}>
        Kurslarni ko'rish
      </Text>
      <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
        Bizning keng qamrovli, interaktiv o'quv dasturimiz bilan vebni o'rganing.
      </Text>

      {/* Search */}
      <View
        style={[styles.searchBox, { backgroundColor: colors.card, borderColor: colors.border }]}
      >
        <Search size={16} color={colors.mutedForeground} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Kurslarni qidiring..."
          placeholderTextColor={colors.mutedForeground}
          style={[styles.searchInput, { color: colors.foreground }]}
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <X size={14} color={colors.mutedForeground} />
          </Pressable>
        )}
      </View>

      {/* Categories */}
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

      {coursesError ? (
        <CoursesError />
      ) : filtered.length === 0 ? (
        <View style={styles.empty}>
          <Search size={32} color={colors.mutedForeground} />
          <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
            Kurs topilmadi
          </Text>
        </View>
      ) : (
        <>
          {STAGES.map((stage) => {
            const stageCourses = filtered.filter((c) => c.stage === stage);
            if (stageCourses.length === 0) return null;
            return (
              <View key={stage} style={styles.section}>
                <Text style={[styles.stageTitle, { color: colors.foreground }]}>
                  {STAGE_LABELS[stage]}
                </Text>
                {stageCourses.map((c) => {
                  const enrolled = isEnrolled(c.id);
                  return (
                    <CourseCard
                      key={c.id}
                      course={c}
                      onPress={() => router.push(`/course/${c.id}` as any)}
                      showProgress={enrolled}
                      progress={getCourseProgress(c.id)}
                    />
                  );
                })}
              </View>
            );
          })}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20 },
  pageTitle: { fontSize: 26, fontFamily: "Inter_700Bold", marginBottom: 6 },
  pageSubtitle: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 20, marginBottom: 16 },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
    marginBottom: 14,
  },
  searchInput: { flex: 1, fontSize: 14, fontFamily: "Inter_400Regular", padding: 0 },
  chipsScroll: { marginBottom: 4 },
  chips: { paddingBottom: 14, paddingRight: 20 },
  section: { marginBottom: 24 },
  stageTitle: { fontSize: 17, fontFamily: "Inter_700Bold", marginBottom: 12 },
  empty: { alignItems: "center", paddingVertical: 48, gap: 12 },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular" },
});
