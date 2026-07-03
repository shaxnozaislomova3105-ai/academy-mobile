import AsyncStorage from "@react-native-async-storage/async-storage";
import { Check, ChevronDown, ChevronUp, Edit3, Trash2 } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useColors } from "@/hooks/useColors";

interface Props {
  lessonId: string;
  color: string;
}

export function NotesSection({ lessonId, color }: Props) {
  const colors = useColors();
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const KEY = `note_${lessonId}`;

  useEffect(() => {
    AsyncStorage.getItem(KEY).then((v) => {
      if (v) setText(v);
    });
  }, [KEY]);

  const handleChange = (val: string) => {
    setText(val);
    setSaved(false);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      await AsyncStorage.setItem(KEY, val);
      setSaved(true);
    }, 800);
  };

  const handleClear = async () => {
    setText("");
    await AsyncStorage.removeItem(KEY);
    setSaved(false);
  };

  const hasNote = text.trim().length > 0;

  return (
    <View style={[styles.wrap, { borderColor: color + "30", backgroundColor: color + "05" }]}>
      <Pressable style={styles.header} onPress={() => setExpanded((e) => !e)}>
        <View style={[styles.iconWrap, { backgroundColor: color + "20" }]}>
          <Edit3 size={16} color={color} />
        </View>
        <View style={styles.headerInfo}>
          <Text style={[styles.headerTitle, { color: colors.foreground }]}>
            Eslatmalar
          </Text>
          <Text style={[styles.headerSub, { color: colors.mutedForeground }]}>
            {hasNote ? `${text.length} ta belgi yozilgan` : "Bu dars uchun o\'z izohingizni yozing"}
          </Text>
        </View>
        {hasNote && (
          <View style={[styles.dot, { backgroundColor: color }]} />
        )}
        {expanded
          ? <ChevronUp size={18} color={colors.mutedForeground} />
          : <ChevronDown size={18} color={colors.mutedForeground} />
        }
      </Pressable>

      {expanded && (
        <View style={styles.body}>
          <TextInput
            value={text}
            onChangeText={handleChange}
            placeholder="Bu yerga o'z izohingiz, muhim fikrlar yoki savollaringizni yozing..."
            placeholderTextColor={colors.mutedForeground}
            multiline
            style={[
              styles.input,
              {
                color: colors.foreground,
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
            textAlignVertical="top"
          />
          <View style={styles.footer}>
            <Text style={[styles.counter, { color: colors.mutedForeground }]}>
              {text.length} belgi
            </Text>
            <View style={styles.footerRight}>
              {saved && (
                <View style={styles.savedBadge}>
                  <Check size={12} color="#22C55E" />
                  <Text style={styles.savedText}>Saqlandi</Text>
                </View>
              )}
              {hasNote && (
                <Pressable onPress={handleClear} style={styles.clearBtn}>
                  <Trash2 size={14} color="#EF4444" />
                  <Text style={styles.clearText}>O'chirish</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { borderRadius: 16, borderWidth: 1, marginBottom: 20, overflow: "hidden" },
  header: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16 },
  iconWrap: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  headerInfo: { flex: 1 },
  headerTitle: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  headerSub: { fontSize: 12, fontFamily: "Inter_400Regular", marginTop: 2 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  body: { paddingHorizontal: 16, paddingBottom: 16 },
  input: {
    minHeight: 120,
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 22,
  },
  footer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 },
  counter: { fontSize: 12, fontFamily: "Inter_400Regular" },
  footerRight: { flexDirection: "row", alignItems: "center", gap: 12 },
  savedBadge: { flexDirection: "row", alignItems: "center", gap: 4 },
  savedText: { fontSize: 12, fontFamily: "Inter_500Medium", color: "#22C55E" },
  clearBtn: { flexDirection: "row", alignItems: "center", gap: 4 },
  clearText: { fontSize: 12, fontFamily: "Inter_500Medium", color: "#EF4444" },
});
