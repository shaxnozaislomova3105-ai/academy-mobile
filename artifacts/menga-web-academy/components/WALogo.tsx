import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Text as SvgText, G } from "react-native-svg";

interface Props {
  size?: "sm" | "md" | "lg";
}

export const WALogo: React.FC<Props> = ({ size = "md" }) => {
  const scales = {
    sm: { bracket: 22, sub: 9, w: 110, h: 38 },
    md: { bracket: 30, sub: 12, w: 152, h: 50 },
    lg: { bracket: 42, sub: 16, w: 212, h: 68 },
  };
  const s = scales[size];

  return (
    <View style={{ width: s.w, height: s.h }}>
      <Svg width={s.w} height={s.h} viewBox={`0 0 ${s.w} ${s.h}`}>
        {/* <W in dark navy */}
        <SvgText
          x="2"
          y={s.bracket}
          fontFamily="Arial Black, Arial"
          fontSize={s.bracket}
          fontWeight="900"
          fill="#1A3A5C"
        >
          {"<W"}
        </SvgText>
        {/* A> in teal */}
        <SvgText
          x={s.bracket * 1.38}
          y={s.bracket}
          fontFamily="Arial Black, Arial"
          fontSize={s.bracket}
          fontWeight="900"
          fill="#00BCD4"
        >
          {"A>"}
        </SvgText>
        {/* WEB bold dark */}
        <SvgText
          x="4"
          y={s.h - 2}
          fontFamily="Arial Black, Arial"
          fontSize={s.sub}
          fontWeight="900"
          letterSpacing="2"
          fill="#1A3A5C"
        >
          {"WEB "}
        </SvgText>
        {/* ACADEMY light teal */}
        <SvgText
          x={s.sub * 3.2}
          y={s.h - 2}
          fontFamily="Arial, sans-serif"
          fontSize={s.sub}
          fontWeight="300"
          letterSpacing="2"
          fill="#00BCD4"
        >
          {"ACADEMY"}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({});
