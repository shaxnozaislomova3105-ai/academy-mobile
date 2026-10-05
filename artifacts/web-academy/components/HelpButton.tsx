import AsyncStorage from "@react-native-async-storage/async-storage";
import { Send } from "lucide-react-native";
import { useEffect, useRef } from "react";
import {
  Animated,
  Linking,
  PanResponder,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TELEGRAM_URL = "https://t.me/Islomova_Sh31";
const STORAGE_KEY = "help_button_position";
const BTN_W = 120;
const BTN_H = 46;
const MARGIN = 8;

export function HelpButton() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  // Ruxsat etilgan chegaralar (har renderda yangilanadi)
  const bounds = useRef({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  bounds.current = {
    minX: MARGIN,
    maxX: width - BTN_W - MARGIN,
    minY: insets.top + MARGIN,
    maxY: height - BTN_H - insets.bottom - MARGIN,
  };

  const clamp = (x: number, y: number) => ({
    x: Math.min(Math.max(x, bounds.current.minX), bounds.current.maxX),
    y: Math.min(Math.max(y, bounds.current.minY), bounds.current.maxY),
  });

  // Boshlang'ich joy: o'ng pastki burchak (tab menyu ustida)
  const start = useRef(clamp(width - BTN_W - 20, height - BTN_H - 160)).current;
  const pos = useRef(new Animated.ValueXY(start)).current;
  const last = useRef({ ...start });

  // Saqlangan joyni yuklash
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((saved) => {
        if (!saved) return;
        const p = JSON.parse(saved);
        const c = clamp(p.x, p.y);
        last.current = c;
        pos.setValue(c);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pos.setOffset(last.current);
        pos.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, { dx: pos.x, dy: pos.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, g) => {
        pos.flattenOffset();
        const isTap = Math.abs(g.dx) < 6 && Math.abs(g.dy) < 6;
        const next = clamp(last.current.x + g.dx, last.current.y + g.dy);
        last.current = next;
        pos.setValue(next);

        if (isTap) {
          Linking.openURL(TELEGRAM_URL);
        } else {
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
        }
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.btn, { transform: pos.getTranslateTransform() }]}
    >
      <Send size={18} color="#fff" />
      <Text style={styles.text}>Yordam</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    left: 0,
    top: 0,
    width: BTN_W,
    height: BTN_H,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#229ED9",
    borderRadius: 999,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  text: { color: "#fff", fontSize: 14, fontFamily: "Inter_600SemiBold" },
});