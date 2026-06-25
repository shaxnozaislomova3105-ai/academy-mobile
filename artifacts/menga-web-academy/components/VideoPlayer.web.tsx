import { Feather } from "@expo/vector-icons";
import { createElement } from "react";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

interface Props {
  videoUrl: string;
  color: string;
  title?: string;
}

function getEmbedUrl(url: string): string {
  const ytMatch =
    url.match(/youtube\.com\/watch\?v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?]+)/) ||
    url.match(/youtube\.com\/embed\/([^?]+)/);
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&modestbranding=1`;
  }
  return url;
}

export function VideoPlayer({ videoUrl, color, title }: Props) {
  const colors = useColors();
  const [isOpen, setIsOpen] = useState(false);
  const embedUrl = getEmbedUrl(videoUrl);

  if (!isOpen) {
    return (
      <Pressable
        onPress={() => setIsOpen(true)}
        style={({ pressed }) => [
          styles.thumbnail,
          { backgroundColor: color + "12", borderColor: color + "30", opacity: pressed ? 0.9 : 1 },
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
            <Text style={styles.ytText}>YouTube</Text>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={[styles.playerWrap, { borderColor: color + "30" }]}>
      <View style={[styles.playerHeader, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
        <View style={styles.ytBadge}>
          <Feather name="youtube" size={13} color="#FF0000" />
          <Text style={[styles.ytText, { color: colors.foreground }]}>Video dars</Text>
        </View>
        <Pressable onPress={() => setIsOpen(false)} style={styles.closeBtn}>
          <Feather name="x" size={16} color={colors.mutedForeground} />
        </Pressable>
      </View>
      <View style={styles.iframeWrap}>
        {createElement("iframe", {
          src: embedUrl,
          style: { width: "100%", height: "100%", border: "none" },
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
        })}
      </View>
    </View>
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
  playerWrap: { borderRadius: 14, borderWidth: 1, overflow: "hidden", marginBottom: 20 },
  playerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  closeBtn: { padding: 4 },
  iframeWrap: { height: 220 },
});
