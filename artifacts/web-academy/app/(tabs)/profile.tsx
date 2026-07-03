import * as Haptics from "expo-haptics";
import { BookOpen, Calendar, CheckCircle, Edit2, Mail, TrendingUp, User } from "lucide-react-native";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAcademy } from "@/context/AcademyContext";
import { COURSES } from "@/data/courses";
import { useColors } from "@/hooks/useColors";

type IconComponent = React.ComponentType<{ size: number; color: string }>;

export default function ProfileScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { profile, updateProfile, enrolledCourseIds, completedLessonIds } =
    useAcademy();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const totalLessons = COURSES.reduce((s, c) => s + c.lessons.length, 0);
  const progressPercent =
    totalLessons > 0
      ? Math.round((completedLessonIds.length / totalLessons) * 100)
      : 0;

  const handleSave = async () => {
    await updateProfile({ name, email });
    setEditing(false);
    if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const menuItems: { Icon: IconComponent; label: string; value: string }[] = [
    { Icon: BookOpen, label: "Kurslarim", value: `${enrolledCourseIds.length} ta` },
    { Icon: CheckCircle, label: "Tugatilgan darslar", value: `${completedLessonIds.length} ta` },
    { Icon: TrendingUp, label: "Umumiy progress", value: `${progressPercent}%` },
    { Icon: Calendar, label: "Qo'shilgan sana", value: new Date(profile.joinedAt).toLocaleDateString("uz-UZ") },
  ];

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
        Profil
      </Text>

      {/* Avatar + Name */}
      <View style={styles.avatarSection}>
        <View
          style={[styles.avatarLarge, { backgroundColor: colors.primary + "20" }]}
        >
          <Text style={[styles.avatarInitial, { color: colors.primary }]}>
            {profile.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        {!editing ? (
          <>
            <Text style={[styles.profileName, { color: colors.foreground }]}>
              {profile.name}
            </Text>
            <Text style={[styles.profileEmail, { color: colors.mutedForeground }]}>
              {profile.email}
            </Text>
            <Pressable
              onPress={() => setEditing(true)}
              style={[styles.editBtn, { borderColor: colors.border }]}
            >
              <Edit2 size={14} color={colors.mutedForeground} />
              <Text style={[styles.editBtnText, { color: colors.mutedForeground }]}>
                Tahrirlash
              </Text>
            </Pressable>
          </>
        ) : (
          <View style={styles.editForm}>
            <View
              style={[
                styles.inputRow,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <User size={16} color={colors.mutedForeground} />
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Ism"
                placeholderTextColor={colors.mutedForeground}
                style={[styles.input, { color: colors.foreground }]}
              />
            </View>
            <View
              style={[
                styles.inputRow,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <Mail size={16} color={colors.mutedForeground} />
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor={colors.mutedForeground}
                keyboardType="email-address"
                autoCapitalize="none"
                style={[styles.input, { color: colors.foreground }]}
              />
            </View>
            <View style={styles.editActions}>
              <Pressable
                onPress={() => setEditing(false)}
                style={[styles.cancelBtn, { borderColor: colors.border }]}
              >
                <Text style={[styles.cancelText, { color: colors.mutedForeground }]}>
                  Bekor
                </Text>
              </Pressable>
              <Pressable
                onPress={handleSave}
                style={[styles.saveBtn, { backgroundColor: colors.primary }]}
              >
                <Text style={[styles.saveText, { color: colors.primaryForeground }]}>
                  Saqlash
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>

      {/* Progress card */}
      <View
        style={[
          styles.progressCard,
          { backgroundColor: colors.primary, },
        ]}
      >
        <View style={styles.progressCardInner}>
          <View>
            <Text style={styles.progressCardTitle}>Umumiy progress</Text>
            <Text style={styles.progressCardSub}>
              {completedLessonIds.length} / {totalLessons} dars bajarildi
            </Text>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${progressPercent}%` as any, backgroundColor: "#fff" },
                ]}
              />
            </View>
          </View>
          <Text style={styles.progressPercent}>{progressPercent}%</Text>
        </View>
      </View>

      {/* Stats */}
      <View
        style={[styles.statsCard, { backgroundColor: colors.card, borderColor: colors.border }]}
      >
        {menuItems.map((item, idx) => (
          <View key={item.label}>
            <View style={styles.statRow}>
              <View
                style={[
                  styles.statIcon,
                  { backgroundColor: colors.primary + "15" },
                ]}
              >
                <item.Icon size={16} color={colors.primary} />
              </View>
              <Text style={[styles.statLabel, { color: colors.foreground }]}>
                {item.label}
              </Text>
              <Text
                style={[styles.statValue, { color: colors.mutedForeground }]}
              >
                {item.value}
              </Text>
            </View>
            {idx < menuItems.length - 1 && (
              <View style={[styles.divider, { backgroundColor: colors.border }]} />
            )}
          </View>
        ))}
      </View>

      {/* App info */}
      <View style={styles.appInfo}>
        <Text style={[styles.appName, { color: colors.mutedForeground }]}>
          Web Academy
        </Text>
        <Text style={[styles.appVersion, { color: colors.mutedForeground }]}>
          Version 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20 },
  pageTitle: { fontSize: 28, fontFamily: "Inter_700Bold", marginBottom: 24 },
  avatarSection: {
    alignItems: "center",
    marginBottom: 24,
    gap: 8,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  avatarInitial: { fontSize: 32, fontFamily: "Inter_700Bold" },
  profileName: { fontSize: 22, fontFamily: "Inter_700Bold" },
  profileEmail: { fontSize: 14, fontFamily: "Inter_400Regular" },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 4,
  },
  editBtnText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  editForm: { width: "100%", gap: 10, marginTop: 8 },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  input: { flex: 1, fontSize: 14, fontFamily: "Inter_400Regular", padding: 0 },
  editActions: { flexDirection: "row", gap: 10, marginTop: 4 },
  cancelBtn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  cancelText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  saveBtn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
  },
  saveText: { fontSize: 14, fontFamily: "Inter_700Bold" },
  progressCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  progressCardInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressCardTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginBottom: 4,
  },
  progressCardSub: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginBottom: 12,
  },
  progressTrack: {
    width: 180,
    height: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: { height: "100%", borderRadius: 3 },
  progressPercent: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "Inter_700Bold",
  },
  statsCard: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 20,
    overflow: "hidden",
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  statIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  statLabel: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_500Medium",
  },
  statValue: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  divider: { height: 1, marginLeft: 64 },
  appInfo: { alignItems: "center", gap: 4, paddingBottom: 8 },
  appName: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  appVersion: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
