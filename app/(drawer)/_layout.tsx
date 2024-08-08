import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, View, Image } from "react-native";
import images from "../../constants/images";
import { useNavigationState, NavigationState, Route } from "@react-navigation/native";
import React from "react";

const LogoTitle: React.FC = () => {
  const state = useNavigationState((state: NavigationState) => state);

  const activeTabRoute = state.routes.find((route: Route<string>) => route.name === "(tabs)");
  const routeName =
    activeTabRoute?.state?.routes[(activeTabRoute.state as any)?.index]?.name ||
    state.routes[state.index].name;

  const displayName = routeName === "(tabs)" ? "Home" : routeName.charAt(0).toUpperCase() + routeName.slice(1);

  return (
    <View className="flex-row items-center w-full justify-between">
      <Image source={images.logo} resizeMode="contain" className="w-20 h-12" />
      <Text className="text-lg font-semibold text-white">{displayName}</Text>
    </View>
  );
};

const Layout: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#161622",
            width: 240,
          },
          headerStyle: {
            backgroundColor: "#161622",
          },
          headerTintColor: "#FFA001",
          drawerActiveTintColor: "#FFA001",
          drawerInactiveTintColor: "#CDCDE0",
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            headerTitle: () => <LogoTitle />,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            headerTitle: "Settings",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
