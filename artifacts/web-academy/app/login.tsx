import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
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
import { classCodeExists, CONSENT_TEXT, sendPasswordReset, updatePassword, verifyResetCode } from "@/lib/auth";
import { HelpButton } from "@/components/HelpButton";

const INVALID_CLASS_CODE_MESSAGE = "Sinf kodi noto'g'ri. Kodni o'qituvchingizdan so'rang";

function resetErrorMessage(e: unknown): string {
  const err = e instanceof Error ? e.message : String(e);
  if (err.includes("rate limit") || err.includes("security purposes")) {
    return "Juda ko'p urinish bo'ldi. Birozdan keyin qayta urinib ko'ring";
  }
  if (err.includes("expired") || err.includes("invalid")) {
    return "Kod noto'g'ri yoki muddati o'tgan";
  }
  if (err.includes("different from the old")) {
    return "Yangi parol eskisidan farq qilishi kerak";
  }
  return err;
}

export default function LoginScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { signIn, signUp } = useAcademy();

  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  const [resetSent, setResetSent] = useState(false);
  const [code, setCode] = useState("");
  const [info, setInfo] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false); // Rozilik holati
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const switchMode = (next: "login" | "register" | "forgot") => {
    setMode(next);
    setError(null);
    setInfo(null);
    setResetSent(false);
    setCode("");
  };

  const submitReset = async () => {
    setError(null);
    setInfo(null);
    if (!email.trim()) {
      setError("Emailni kiriting");
      return;
    }

    if (!resetSent) {
      setLoading(true);
      try {
        await sendPasswordReset(email.trim());
        setResetSent(true);
        setPassword("");
        setInfo("Agar bu email ro'yxatdan o'tgan bo'lsa, unga tiklash kodi yuborildi");
      } catch (e) {
        setError(resetErrorMessage(e));
      }
      setLoading(false);
      return;
    }

    if (!code.trim()) {
      setError("Emailga kelgan kodni kiriting");
      return;
    }
    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lsin");
      return;
    }

    setLoading(true);
    try {
      await verifyResetCode(email.trim(), code.trim());
    } catch (e) {
      setError(resetErrorMessage(e));
      setLoading(false);
      return;
    }
    // Kod tasdiqlangach sessiya ochiladi va AuthGate bosh sahifaga o'tkazadi
    try {
      await updatePassword(password);
    } catch (e) {
      Alert.alert("Parol o'zgarmadi", resetErrorMessage(e));
    }
    setLoading(false);
  };

  const submit = async () => {
    if (mode === "forgot") return submitReset();
    setError(null);
    if (!email.trim() || !password) {
      setError("Email va parolni kiriting");
      return;
    }
    if (mode === "register" && !name.trim()) {
      setError("Ismingizni kiriting");
      return;
    }
    if (mode === "register" && !classCode.trim()) {
      setError("Sinf kodini kiriting");
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
      const codeOk = await classCodeExists(classCode);
      if (codeOk === false) {
        setLoading(false);
        setError(INVALID_CLASS_CODE_MESSAGE);
        return;
      }
      err = await signUp(name.trim(), email.trim(), password, classCode);
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
} else if (err.includes("Database error saving new user") || err.includes("invalid_class_code")) {
  message = INVALID_CLASS_CODE_MESSAGE;
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
          {mode === "login" ? "Kirish" : mode === "register" ? "Ro'yxatdan o'tish" : "Parolni tiklash"}
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
        {mode === "register" && (
          <TextInput
            style={inputStyle}
            placeholder="Sinf kodi"
            placeholderTextColor={colors.mutedForeground}
            value={classCode}
            onChangeText={setClassCode}
            autoCapitalize="characters"
            autoCorrect={false}
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
        {mode === "forgot" && resetSent && (
          <TextInput
            style={inputStyle}
            placeholder="Emaildagi kod"
            placeholderTextColor={colors.mutedForeground}
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            autoCapitalize="none"
          />
        )}
        {(mode !== "forgot" || resetSent) && (
          <TextInput
            style={inputStyle}
            placeholder={mode === "forgot" ? "Yangi parol" : "Parol"}
            placeholderTextColor={colors.mutedForeground}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
        )}

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

        {info && <Text style={[styles.consentText, { color: colors.mutedForeground }]}>{info}</Text>}
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
              {mode === "login"
                ? "Kirish"
                : mode === "register"
                  ? "Ro'yxatdan o'tish"
                  : resetSent
                    ? "Parolni yangilash"
                    : "Kod yuborish"}
            </Text>
          )}
        </Pressable>

        {mode === "login" && (
          <Pressable onPress={() => switchMode("forgot")}>
            <Text style={[styles.switch, { color: colors.primary }]}>
              Parolni unutdingizmi?
            </Text>
          </Pressable>
        )}

        <Pressable onPress={() => switchMode(mode === "login" ? "register" : "login")}>
          <Text style={[styles.switch, { color: colors.mutedForeground }]}>
            {mode === "login"
              ? "Hisobingiz yo'qmi? Ro'yxatdan o'ting"
              : mode === "register"
                ? "Hisobingiz bormi? Kiring"
                : "Kirishga qaytish"}
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