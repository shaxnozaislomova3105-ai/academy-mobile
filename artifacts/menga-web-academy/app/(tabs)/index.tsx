import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
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
import { useColors } from "@/hooks/useColors";

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filtered = COURSES.filter((c) => {
    const matchesCategory =
      activeCategory === "Barchasi" || c.category === activeCategory;
    const matchesSearch =
      search.length === 0 ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = COURSES.slice(0, 3);

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
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: colors.mutedForeground }]}>
            Xush kelibsiz!
          </Text>
          <Text style={[styles.headerTitle, { color: colors.foreground }]}>
            Menga Web Academy
          </Text>
        </View>
        <View
          style={[styles.avatarCircle, { backgroundColor: colors.primary + "20" }]}
        >
          <Feather name="user" size={22} color={colors.primary} />
        </View>
      </View>

      {/* Search */}
      <View
        style={[
          styles.searchBox,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Feather name="search" size={18} color={colors.mutedForeground} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Kurs qidiring..."
          placeholderTextColor={colors.mutedForeground}
          style={[styles.searchInput, { color: colors.foreground }]}
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Feather name="x" size={16} color={colors.mutedForeground} />
          </Pressable>
        )}
      </View>

      {search.length === 0 && (
        <>
          {/* Banner */}
          <View
            style={[
              styles.banner,
              { backgroundColor: colors.primary },
            ]}
          >
            <View style={styles.bannerText}>
              <Text style={styles.bannerTag}>Yangi kurs!</Text>
              <Text style={styles.bannerTitle}>
                React.js ni{"\n"}noldan o'rganing
              </Text>
              <Pressable
                onPress={() => router.push("/course/react" as any)}
                style={styles.bannerBtn}
              >
                <Text style={styles.bannerBtnText}>Boshlash</Text>
                <Feather name="arrow-right" size={14} color={colors.primary} />
              </Pressable>
            </View>
            <View style={styles.bannerImageWrapper}>
              <Image
                source={require("@/assets/images/course-react.png")}
                style={styles.bannerImage}
              />
            </View>
          </View>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            {[
              { icon: "book-open", value: `${COURSES.length}`, label: "Kurslar" },
              { icon: "users", value: "12K+", label: "O'quvchilar" },
              { icon: "award", value: "98%", label: "Mamnuniyat" },
            ].map((s) => (
              <View
                key={s.label}
                style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Feather name={s.icon as any} size={18} color={colors.primary} />
                <Text style={[styles.statValue, { color: colors.foreground }]}>
                  {s.value}
                </Text>
                <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
                  {s.label}
                </Text>
              </View>
            ))}
          </View>

          {/* Featured */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
                Tavsiya etilgan
              </Text>
              <Pressable onPress={() => router.push("/(tabs)/courses" as any)}>
                <Text style={[styles.seeAll, { color: colors.primary }]}>
                  Barchasi
                </Text>
              </Pressable>
            </View>
            {featured.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onPress={() => router.push(`/course/${course.id}` as any)}
              />
            ))}
          </View>
        </>
      )}

      {search.length > 0 && (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            Natijalar ({filtered.length})
          </Text>
          {filtered.length === 0 ? (
            <View style={styles.empty}>
              <Feather name="search" size={36} color={colors.mutedForeground} />
              <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
                Kurs topilmadi
              </Text>
            </View>
          ) : (
            filtered.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onPress={() => router.push(`/course/${course.id}` as any)}
              />
            ))
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: { fontSize: 13, fontFamily: "Inter_400Regular", marginBottom: 2 },
  headerTitle: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
  },
  avatarCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    padding: 0,
  },
  banner: {
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    overflow: "hidden",
  },
  bannerText: { flex: 1 },
  bannerTag: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    lineHeight: 26,
    marginBottom: 16,
  },
  bannerBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  bannerBtnText: {
    fontSize: 13,
    fontFamily: "Inter_700Bold",
    color: "#4F8EF7",
  },
  bannerImageWrapper: {
    width: 100,
    height: 90,
    borderRadius: 12,
    overflow: "hidden",
  },
  bannerImage: { width: "100%", height: "100%", resizeMode: "cover" },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
  statCard: {
    flex: 1,
    alignItems: "center",
    gap: 4,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
  },
  statValue: { fontSize: 16, fontFamily: "Inter_700Bold" },
  statLabel: { fontSize: 11, fontFamily: "Inter_400Regular" },
  section: { marginBottom: 8 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  seeAll: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  empty: { alignItems: "center", paddingVertical: 48, gap: 12 },
  emptyText: { fontSize: 15, fontFamily: "Inter_400Regular" },
});
