import { BlurView } from "expo-blur";
import Constants, { ExecutionEnvironment } from "expo-constants";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Tabs } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { SymbolView } from "expo-symbols";
import { BarChart2, BookOpen, Home, User } from "lucide-react-native";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";
import { HelpButton } from "@/components/HelpButton";

import { useColors } from "@/hooks/useColors";

function NativeTabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon sf={{ default: "house", selected: "house.fill" }} />
          <NativeTabs.Trigger.Label>Bosh sahifa</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="courses">
          <NativeTabs.Trigger.Icon sf={{ default: "book", selected: "book.fill" }} />
          <NativeTabs.Trigger.Label>Kurslar</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="my-learning">
          <NativeTabs.Trigger.Icon sf={{ default: "chart.bar", selected: "chart.bar.fill" }} />
          <NativeTabs.Trigger.Label>Faollik</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="profile">
          <NativeTabs.Trigger.Icon sf={{ default: "person", selected: "person.fill" }} />
          <NativeTabs.Trigger.Label>Profil</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
      <HelpButton />
    </View>
  );
}
function ClassicTabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.mutedForeground,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: isIOS ? "transparent" : colors.background,
            borderTopWidth: isWeb ? 1 : 0,
            borderTopColor: colors.border,
            elevation: 0,
            ...(isWeb ? { height: 84 } : {}),
          },
          tabBarBackground: () =>
            isIOS ? (
              <BlurView
                intensity={100}
                tint={isDark ? "dark" : "light"}
                style={StyleSheet.absoluteFill}
              />
            ) : isWeb ? (
              <View
                style={[
                  StyleSheet.absoluteFill,
                  { backgroundColor: colors.background },
                ]}
              />
            ) : null,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Bosh sahifa",
            tabBarIcon: ({ color }) =>
              isIOS ? (
                <SymbolView name="house" tintColor={color} size={24} />
              ) : (
                <Home size={22} color={color} />
              ),
          }}
        />
        <Tabs.Screen
          name="courses"
          options={{
            title: "Kurslar",
            tabBarIcon: ({ color }) =>
              isIOS ? (
                <SymbolView name="book" tintColor={color} size={24} />
              ) : (
                <BookOpen size={22} color={color} />
              ),
          }}
        />
        <Tabs.Screen
          name="my-learning"
          options={{
            title: "Faollik",
            tabBarIcon: ({ color }) =>
              isIOS ? (
                <SymbolView name="chart.bar" tintColor={color} size={24} />
              ) : (
                <BarChart2 size={22} color={color} />
              ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profil",
            tabBarIcon: ({ color }) =>
              isIOS ? (
                <SymbolView name="person" tintColor={color} size={24} />
              ) : (
                <User size={22} color={color} />
              ),
          }}
        />
      </Tabs>
      <HelpButton />
    </View>
  );
}

export default function TabLayout() {
  const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
  if (!isExpoGo && isLiquidGlassAvailable()) {
    return <NativeTabLayout />;
  }
  return <ClassicTabLayout />;
}