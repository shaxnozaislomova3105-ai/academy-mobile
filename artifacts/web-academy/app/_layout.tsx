import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { WEB_MAX_WIDTH } from "@/constants/layout";
import { AcademyProvider, useAcademy } from "@/context/AcademyContext";
import { useColors } from "@/hooks/useColors";

SplashScreen.preventAutoHideAsync();

function AuthGate() {
  const { session, authLoading } = useAcademy();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (authLoading) return;
    const onLogin = (segments[0] as string) === "login";
    if (!session && !onLogin) router.replace("/login" as any);
    else if (session && onLogin) router.replace("/" as any);
  }, [session, authLoading, segments]);

  return null;
}

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AcademyProvider>
      <AuthGate />
      {children}
    </AcademyProvider>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    ...(Platform.OS === "web"
      ? { width: "100%", maxWidth: WEB_MAX_WIDTH, alignSelf: "center" }
      : {}),
  },
});

export default function RootLayout() {
  const colors = useColors();
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.column}>
        <Providers>
          <Stack screenOptions={{ headerShown: false }} />
        </Providers>
      </View>
    </GestureHandlerRootView>
  );
}