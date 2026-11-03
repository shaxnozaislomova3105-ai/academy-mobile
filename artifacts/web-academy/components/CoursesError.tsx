import { RotateCcw } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";

export function CoursesError() {
  const colors = useColors();
  const { reloadData, coursesLoading } = useAcademy();

  return (
    <View style={styles.wrap}>
      <Text style={[styles.text, { color: colors.mutedForeground }]}>
        Kurslarni yuklab bo'lmadi. Internet aloqasini tekshiring.
      </Text>
      <Pressable
        onPress={reloadData}
        disabled={coursesLoading}
        style={({ pressed }) => [
          styles.btn,
          { backgroundColor: colors.primary, opacity: pressed || coursesLoading ? 0.8 : 1 },
        ]}
      >
        <RotateCcw size={14} color="#fff" />
        <Text style={styles.btnText}>Qayta urinish</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", paddingVertical: 32, paddingHorizontal: 20, gap: 12 },
  text: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 20 },
  btn: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  btnText: { color: "#fff", fontSize: 14, fontFamily: "Inter_600SemiBold" },
});
