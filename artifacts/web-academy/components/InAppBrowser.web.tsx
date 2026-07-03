import { createElement } from "react";
import React from "react";
import { ChevronLeft } from "lucide-react-native";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";

interface Props {
  url: string | null;
  title: string;
  onClose: () => void;
}

export function InAppBrowser({ url, title, onClose }: Props) {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={!!url}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View
          style={[
            styles.topBar,
            {
              backgroundColor: colors.card,
              borderBottomColor: colors.border,
              paddingTop: insets.top + 67 + 8,
            },
          ]}
        >
          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.closeBtn,
              { backgroundColor: colors.background, borderColor: colors.border, opacity: pressed ? 0.7 : 1 },
            ]}
          >
            <ChevronLeft size={20} color={colors.foreground} />
          </Pressable>
          <Text style={[styles.titleText, { color: colors.foreground }]} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.closeBtn} />
        </View>

        <View style={styles.iframeWrap}>
          {url
            ? createElement("iframe", {
                src: url,
                style: { width: "100%", height: "100%", border: "none" },
              })
            : null}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  closeBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
  },
  iframeWrap: { flex: 1 },
});
