import React from "react";
import { Text, View } from "react-native";

interface Props {
  size?: "sm" | "md" | "lg";
}

const fontSizes = { sm: 18, md: 24, lg: 32 };

export const WALogo: React.FC<Props> = ({ size = "md" }) => {
  const fs = fontSizes[size];
  return (
    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
      <Text style={{ fontSize: fs, fontFamily: "Inter_700Bold", color: "#1A3A5C", letterSpacing: 0.5 }}>
        Web
      </Text>
      <Text style={{ fontSize: fs, fontFamily: "Inter_400Regular", color: "#00BCD4", letterSpacing: 0.5 }}>
        {" Academy"}
      </Text>
    </View>
  );
};
