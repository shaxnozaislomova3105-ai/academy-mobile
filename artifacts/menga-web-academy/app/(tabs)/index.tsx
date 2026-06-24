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

  const freeCourses = COURSES.filter((c) => !c.isPremium).slice(0, 3);
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
          {/* Hero banner */}
          <View style={[styles.hero, { backgroundColor: colors.navyDark }]}>
            <View style={styles.heroLeft}>
              <Text style={styles.heroSub}>Noldan professionalga</Text>
              <Text style={styles.heroTitle}>
                Web Academy{"\n"}bilan{" "}
                <Text style={{ color: colors.primary }}>dasturlashni boshlang.</Text>
              </Text>
              <Pressable
                onPress={() => router.push("/(tabs)/courses" as any)}
                style={[styles.heroBtn, { backgroundColor: colors.primary }]}
              >
                <Text style={styles.heroBtnText}>Kurslarni ko'rish</Text>
                <Feather name="arrow-right" size={14} color="#fff" />
              </Pressable>
            </View>
            <View style={styles.heroRight}>
              <View style={[styles.codeBox, { backgroundColor: colors.navyMid }]}>
                <Text style={[styles.codeLine, { color: colors.primary }]}>{"<WA>"}</Text>
                <Text style={styles.codeGray}>{"  learn("}</Text>
                <Text style={styles.codeStr}>{"    'html',"}</Text>
                <Text style={styles.codeStr}>{"    'css',"}</Text>
                <Text style={styles.codeStr}>{"    'js'"}</Text>
                <Text style={styles.codeGray}>{"  )"}</Text>
                <Text style={[styles.codeLine, { color: colors.primary }]}>{"</WA>"}</Text>
              </View>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            {[
              { val: "7+", label: "Kurslar", icon: "book-open" as const },
              { val: "10K+", label: "O'quvchilar", icon: "users" as const },
              { val: "4.9★", label: "Reyting", icon: "star" as const },
            ].map((s) => (
              <View
                key={s.label}
                style={[styles.stat, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Feather name={s.icon} size={16} color={colors.primary} />
                <Text style={[styles.statVal, { color: colors.foreground }]}>{s.val}</Text>
                <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{s.label}</Text>
              </View>
            ))}
          </View>

          {/* Premium banner */}
          <Pressable
            onPress={() => router.push("/(tabs)/courses" as any)}
            style={[styles.premiumBanner, { backgroundColor: "#FEF3C7", borderColor: "#F59E0B40" }]}
          >
            <View style={[styles.premiumIcon, { backgroundColor: "#F59E0B20" }]}>
              <Feather name="lock" size={18} color="#F59E0B" />
            </View>
            <View style={styles.premiumText}>
              <Text style={[styles.premiumTitle, { color: colors.foreground }]}>
                Web Academy Premium
              </Text>
              <Text style={[styles.premiumSub, { color: colors.mutedForeground }]}>
                CSS, JS, React, Node.js va Full-Stack kurslariga kirish
              </Text>
            </View>
            <Feather name="chevron-right" size={18} color="#F59E0B" />
          </Pressable>

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

          {/* Free courses */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
                Bepul kurslar
              </Text>
              <Pressable onPress={() => router.push("/(tabs)/courses" as any)}>
                <Text style={[styles.seeAll, { color: colors.primary }]}>Barchasi</Text>
              </Pressable>
            </View>
            {freeCourses.map((c) => (
              <CourseCard
                key={c.id}
                course={c}
                onPress={() => router.push(`/course/${c.id}` as any)}
              />
            ))}
          </View>

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
                  onPress={() => router.push("/(tabs)/courses" as any)}
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
  hero: {
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    overflow: "hidden",
    minHeight: 160,
  },
  heroLeft: { flex: 1, gap: 8 },
  heroSub: { color: "#00BCD4", fontSize: 11, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 1 },
  heroTitle: { color: "#fff", fontSize: 17, fontFamily: "Inter_700Bold", lineHeight: 24 },
  heroBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 4,
  },
  heroBtnText: { fontSize: 13, fontFamily: "Inter_700Bold", color: "#fff" },
  heroRight: { width: 110, marginLeft: 12 },
  codeBox: {
    borderRadius: 10,
    padding: 10,
    gap: 1,
  },
  codeLine: { fontSize: 11, fontFamily: "Inter_700Bold" },
  codeGray: { fontSize: 10, fontFamily: "Inter_400Regular", color: "#8B9DB5" },
  codeStr: { fontSize: 10, fontFamily: "Inter_400Regular", color: "#22C55E" },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 16 },
  stat: {
    flex: 1,
    alignItems: "center",
    gap: 4,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  statVal: { fontSize: 16, fontFamily: "Inter_700Bold" },
  statLabel: { fontSize: 10, fontFamily: "Inter_400Regular" },
  premiumBanner: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 12,
    marginBottom: 24,
  },
  premiumIcon: { width: 40, height: 40, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  premiumText: { flex: 1 },
  premiumTitle: { fontSize: 14, fontFamily: "Inter_700Bold", marginBottom: 2 },
  premiumSub: { fontSize: 12, fontFamily: "Inter_400Regular", lineHeight: 16 },
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
