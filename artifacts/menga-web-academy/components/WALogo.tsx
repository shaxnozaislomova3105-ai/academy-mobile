import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

interface Props {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

export const WALogo: React.FC<Props> = ({ size = "md", inverted = false }) => {
  const colors = useColors();

  const scales = {
    sm: { bracket: 13, wa: 11, text: 12, gap: 6 },
    md: { bracket: 18, wa: 15, text: 16, gap: 8 },
    lg: { bracket: 26, wa: 22, text: 22, gap: 12 },
  };
  const s = scales[size];

  const bracketColor = colors.primary;
  const textColor = inverted ? "#fff" : colors.foreground;

  return (
    <View style={[styles.row, { gap: s.gap }]}>
      <View
        style={[
          styles.badge,
          {
            backgroundColor: inverted ? "rgba(255,255,255,0.15)" : colors.primary + "15",
            paddingHorizontal: s.bracket - 2,
            paddingVertical: s.bracket / 3,
            borderRadius: s.bracket / 2.5,
          },
        ]}
      >
        <Text
          style={[
            styles.bracket,
            { fontSize: s.bracket, color: bracketColor },
          ]}
        >
          {"<"}
          <Text style={{ color: inverted ? "#fff" : colors.foreground }}>WA</Text>
          {">"}
        </Text>
      </View>
      <View style={styles.wordmark}>
        <Text style={[styles.webText, { fontSize: s.text, color: textColor }]}>
          WEB{" "}
          <Text style={[styles.academyText, { color: colors.primary }]}>
            ACADEMY
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  badge: { alignItems: "center", justifyContent: "center" },
  bracket: {
    fontFamily: "Inter_700Bold",
    lineHeight: undefined,
  },
  wordmark: {},
  webText: {
    fontFamily: "Inter_700Bold",
    letterSpacing: 0.5,
  },
  academyText: {
    fontFamily: "Inter_700Bold",
  },
});
