import { Feather } from "@expo/vector-icons";
import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

interface Props {
  videoUrl: string;
  color: string;
  title?: string;
}

export function VideoPlayer({ videoUrl, color, title }: Props) {
  const colors = useColors();

  const handleOpen = () => {
    Linking.openURL(videoUrl).catch(() => {
      Linking.openURL(`https://www.youtube.com`);
    });
  };

  return (
    <Pressable
      onPress={handleOpen}
      style={({ pressed }) => [
        styles.thumbnail,
        { backgroundColor: color + "12", borderColor: color + "30", opacity: pressed ? 0.85 : 1 },
      ]}
    >
      <View style={[styles.playCircle, { backgroundColor: color }]}>
        <Feather name="play" size={22} color="#fff" style={{ marginLeft: 3 }} />
      </View>
      <View style={styles.thumbInfo}>
        <Text style={[styles.thumbLabel, { color: colors.mutedForeground }]}>
          Video dars
        </Text>
        {title ? (
          <Text style={[styles.thumbTitle, { color: colors.foreground }]} numberOfLines={2}>
            {title}
          </Text>
        ) : null}
        <View style={styles.ytBadge}>
          <Feather name="youtube" size={12} color="#FF0000" />
          <Text style={styles.ytText}>YouTube orqali ochish</Text>
          <Feather name="external-link" size={11} color={colors.mutedForeground} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  playCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbInfo: { flex: 1, gap: 4 },
  thumbLabel: { fontSize: 11, fontFamily: "Inter_400Regular", textTransform: "uppercase", letterSpacing: 0.5 },
  thumbTitle: { fontSize: 14, fontFamily: "Inter_600SemiBold", lineHeight: 20 },
  ytBadge: { flexDirection: "row", alignItems: "center", gap: 5, marginTop: 2 },
  ytText: { fontSize: 11, fontFamily: "Inter_600SemiBold", color: "#FF0000" },
});
