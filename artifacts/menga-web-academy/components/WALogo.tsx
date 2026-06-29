import React from "react";
import { Image } from "react-native";

interface Props {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 90, height: 45 },
  md: { width: 120, height: 60 },
  lg: { width: 160, height: 80 },
};

export const WALogo: React.FC<Props> = ({ size = "md" }) => {
  const { width, height } = sizes[size];
  return (
    <Image
      source={require("@/assets/images/wa-logo.png")}
      style={{ width, height }}
      resizeMode="contain"
    />
  );
};
