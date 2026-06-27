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
import { CourseCard } from "@/components/CourseCard";
import { WALogo } from "@/components/WALogo";
import { COURSES } from "@/data/courses";
import { useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { getEnrolledCourses, getCourseProgress } = useAcademy();
  const [search, setSearch] = useState("");

  const filtered = COURSES.filter(
    (c) =>
      search.length === 0 ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
  );

  const enrolledCourses = getEnrolledCourses().slice(0, 3);

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
      <View style={styles.header}>
        <WALogo size="md" />
        <Pressable
          onPress={() => router.push("/(tabs)/profile" as any)}
          style={[styles.avatarBtn, { backgroundColor: colors.card, borderColor: colors.border }]}
        >
          <Feather name="user" size={18} color={colors.mutedForeground} />
        </Pressable>
      </View>

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

      {/* Search results */}
      {search.length > 0 ? (
        <View>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            Natijalar ({filtered.length})
          </Text>
          {filtered.length === 0 ? (
            <View style={styles.empty}>
              <Feather name="search" size={32} color={colors.mutedForeground} />
              <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
                Kurs topilmadi
              </Text>
            </View>
          ) : (
            filtered.map((c) => (
              <CourseCard
                key={c.id}
                course={c}
                onPress={() => router.push(`/course/${c.id}` as any)}
              />
            ))
          )}
        </View>
      ) : (
        <>
          {/* Enrolled courses */}
          {enrolledCourses.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
                  Davom etish
                </Text>
                <Pressable onPress={() => router.push("/(tabs)/my-learning" as any)}>
                  <Text style={[styles.seeAll, { color: colors.primary }]}>Barchasi</Text>
                </Pressable>
              </View>
              {enrolledCourses.map((c) => (
                <CourseCard
                  key={c.id}
                  course={c}
                  onPress={() => router.push(`/course/${c.id}` as any)}
                  showProgress
                  progress={getCourseProgress(c.id)}
                  compact
                />
              ))}
            </View>
          )}

          {/* Categories */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
              Yo'nalishlar
            </Text>
            <View style={styles.catGrid}>
              {[
                { name: "HTML", color: "#E44D26", icon: "code" as const },
                { name: "CSS", color: "#264DE4", icon: "layout" as const },
                { name: "JavaScript", color: "#F7DF1E", icon: "zap" as const },
                { name: "React", color: "#61DAFB", icon: "layers" as const },
                { name: "Node.js", color: "#339933", icon: "server" as const },
                { name: "Full-Stack", color: "#7C3AED", icon: "package" as const },
              ].map((cat) => (
                <Pressable
                  key={cat.name}
                  onPress={() => router.push(`/(tabs)/courses?category=${encodeURIComponent(cat.name)}` as any)}
                  style={({ pressed }) => [
                    styles.catCard,
                    { backgroundColor: cat.color + "12", borderColor: cat.color + "30", opacity: pressed ? 0.8 : 1 },
                  ]}
                >
                  <Feather name={cat.icon} size={20} color={cat.color} />
                  <Text style={[styles.catName, { color: cat.color }]}>{cat.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </>
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
    marginBottom: 16,
  },
  avatarBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
    marginBottom: 20,
  },
  searchInput: { flex: 1, fontSize: 14, fontFamily: "Inter_400Regular", padding: 0 },
  section: { marginBottom: 24 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 },
  sectionTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  seeAll: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  catGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  catCard: {
    width: "30%",
    flex: undefined,
    flexGrow: 1,
    alignItems: "center",
    gap: 6,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
  },
  catName: { fontSize: 12, fontFamily: "Inter_700Bold" },
  empty: { alignItems: "center", paddingVertical: 40, gap: 12 },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular" },
});
