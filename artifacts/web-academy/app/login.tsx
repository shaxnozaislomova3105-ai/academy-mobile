import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";
import { CONSENT_TEXT } from "@/lib/auth";
import { HelpButton } from "@/components/HelpButton";

export default function LoginScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { signIn, signUp } = useAcademy();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false); // Rozilik holati
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError(null);
    if (!email.trim() || !password) {
      setError("Email va parolni kiriting");
      return;
    }
    if (mode === "register" && !name.trim()) {
      setError("Ismingizni kiriting");
      return;
    }
    if (mode === "register" && !consent) {
      setError("Tadqiqotda qatnashish uchun rozilik berishingiz kerak");
      return;
    }
    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lsin");
      return;
    }

    setLoading(true);
    let err: string | null;
    if (mode === "register") {
      err = await signUp(name.trim(), email.trim(), password);
      if (!err) err = await signIn(email.trim(), password);
    } else {
      err = await signIn(email.trim(), password);
    }
    setLoading(false);

   if (err) {
  let message = err;
if (err.includes("already registered") || err.includes("already in use")) {
  message = "Bu foydalanuvchi allaqachon ro'yxatdan o'tgan";
} else if (err.includes("Invalid login credentials") || err.includes("Invalid credentials") || err.includes("User not found")) {
  message = "Bunday foydalanuvchi topilmadi yoki parol noto'g'ri";
} else if (err.includes("Password should be at least 6 characters")) {
  message = "Parol kamida 6 ta belgidan iborat bo'lsin";
}

setError(message);
return;
   }
    router.replace("/" as any);
  };

  const inputStyle = [
    styles.input,
    { backgroundColor: colors.card, borderColor: colors.border, color: colors.foreground },
  ];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 40, paddingBottom: insets.bottom + 24 },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.brand, { color: colors.primary }]}>Web Academy</Text>
        <Text style={[styles.title, { color: colors.foreground }]}>
          {mode === "login" ? "Kirish" : "Ro'yxatdan o'tish"}
        </Text>

        {mode === "register" && (
          <TextInput
            style={inputStyle}
            placeholder="Ism"
            placeholderTextColor={colors.mutedForeground}
            value={name}
            onChangeText={setName}
          />
        )}
        <TextInput
          style={inputStyle}
          placeholder="Email"
          placeholderTextColor={colors.mutedForeground}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={inputStyle}
          placeholder="Parol"
          placeholderTextColor={colors.mutedForeground}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {/* Faqat ro'yxatdan o'tish rejimida dissertatsiya rozilik matni va checkbox chiqadi */}
        {mode === "register" && (
          <View style={styles.consentContainer}>
            <Text style={[styles.consentText, { color: colors.mutedForeground }]}>
              {CONSENT_TEXT}
            </Text>
            <Pressable
              style={styles.checkboxRow}
              onPress={() => setConsent(!consent)}
            >
              <View
                style={[
                  styles.checkbox,
                  {
                    borderColor: colors.border,
                    backgroundColor: consent ? colors.primary : "transparent",
                  },
                ]}
              >
                {consent && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={[styles.checkboxLabel, { color: colors.foreground }]}>
                Roziman, shartlarni qabul qilaman
              </Text>
            </Pressable>
          </View>
        )}

        {error && <Text style={styles.error}>{error}</Text>}

        <Pressable
          onPress={submit}
          disabled={loading}
          style={({ pressed }) => [
            styles.btn,
            { backgroundColor: colors.primary, opacity: pressed || loading ? 0.8 : 1 },
          ]}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.btnText}>
              {mode === "login" ? "Kirish" : "Ro'yxatdan o'tish"}
            </Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => {
            setMode(mode === "login" ? "register" : "login");
            setError(null);
          }}
        >
          <Text style={[styles.switch, { color: colors.mutedForeground }]}>
            {mode === "login"
              ? "Hisobingiz yo'qmi? Ro'yxatdan o'ting"
              : "Hisobingiz bormi? Kiring"}
          </Text>
        </Pressable>
      </ScrollView>
      <HelpButton />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 24, gap: 14 },
  brand: { fontSize: 16, fontFamily: "Inter_700Bold" },
  title: { fontSize: 28, fontFamily: "Inter_700Bold", marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  consentContainer: {
    gap: 8,
    marginTop: 4,
    marginBottom: 4,
  },
  consentText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Inter_400Regular",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 4,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  checkboxLabel: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
  },
  error: { color: "#EF4444", fontSize: 13, fontFamily: "Inter_500Medium" },
  btn: { borderRadius: 14, paddingVertical: 15, alignItems: "center", marginTop: 6 },
  btnText: { color: "#fff", fontSize: 16, fontFamily: "Inter_700Bold" },
  switch: { textAlign: "center", fontSize: 14, fontFamily: "Inter_500Medium", marginTop: 8 },
});