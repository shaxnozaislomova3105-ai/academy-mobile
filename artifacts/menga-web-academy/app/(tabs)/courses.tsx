import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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
import { CATEGORIES, COURSES } from "@/data/courses";
import { useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";

export default function CoursesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { isEnrolled, getCourseProgress } = useAcademy();
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [search, setSearch] = useState("");

  const filtered = COURSES.filter((c) => {
    const matchesCat = activeCategory === "Barchasi" || c.category === activeCategory;
    const matchesSearch =
      search.length === 0 ||
      c.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const freeCourses = filtered.filter((c) => !c.isPremium);
  const premiumCourses = filtered.filter((c) => c.isPremium);

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
        <Feather name="search" size={16} color={colors.mutedForeground} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Kurslarni qidiring..."
          placeholderTextColor={colors.mutedForeground}
          style={[styles.searchInput, { color: colors.foreground }]}
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Feather name="x" size={14} color={colors.mutedForeground} />
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

      {/* Premium banner */}
      <View style={[styles.premiumBanner, { backgroundColor: "#FEF9ED", borderColor: "#F59E0B40" }]}>
        <Feather name="lock" size={16} color="#F59E0B" />
        <View style={styles.premiumTextWrap}>
          <Text style={[styles.premiumTitle, { color: colors.foreground }]}>
            Web Academy Premium
          </Text>
          <Text style={[styles.premiumSub, { color: colors.mutedForeground }]}>
            CSS, JavaScript, React, Node.js va Full-Stack kurslariga + barcha sertifikatlarga kirish. HTML kurslari hamisha bepul.
          </Text>
        </View>
      </View>

      {filtered.length === 0 ? (
        <View style={styles.empty}>
          <Feather name="search" size={32} color={colors.mutedForeground} />
          <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
            Kurs topilmadi
          </Text>
        </View>
      ) : (
        <>
          {/* Free courses */}
          {freeCourses.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
                  Bepul kurslar
                </Text>
                <View style={[styles.countBadge, { backgroundColor: "#22C55E15" }]}>
                  <Text style={[styles.countText, { color: "#22C55E" }]}>
                    {freeCourses.length} ta
                  </Text>
                </View>
              </View>
              {freeCourses.map((c) => {
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
          )}

          {/* Premium courses */}
          {premiumCourses.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
                  Premium kurslar
                </Text>
                <View style={[styles.countBadge, { backgroundColor: "#F59E0B15" }]}>
                  <Feather name="lock" size={11} color="#F59E0B" />
                  <Text style={[styles.countText, { color: "#F59E0B" }]}>
                    {premiumCourses.length} ta
                  </Text>
                </View>
              </View>
              {premiumCourses.map((c) => {
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
          )}
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
  premiumBanner: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    marginBottom: 24,
  },
  premiumTextWrap: { flex: 1 },
  premiumTitle: { fontSize: 14, fontFamily: "Inter_700Bold", marginBottom: 4 },
  premiumSub: { fontSize: 12, fontFamily: "Inter_400Regular", lineHeight: 16 },
  section: { marginBottom: 24 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontFamily: "Inter_700Bold" },
  countBadge: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  countText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  empty: { alignItems: "center", paddingVertical: 48, gap: 12 },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular" },
});
