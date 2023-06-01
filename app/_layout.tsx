import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { View, useColorScheme, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

const HeaderComponent = () => {
  const image = "https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png";
  const avatar =
    "https://yt3.ggpht.com/SBra9X0UPsNzyDjGcvN4iw2pb5Qku_3qFd1figMt48J7rUdU8mJYHPHAx0t6d0E6wLcUU__nZjg=s68-c-k-c0x00ffffff-no-rj";

  return (
    <SafeAreaView className="flex-row justify-between mx-4">
      <View className="flex-row items-center space-x-1">
        {/* <Image source={image} style={{ height: 28, width: 40 }} /> */}
        <FontAwesome name="youtube-play" size={28} color="red" />
        <Text className="text-black font-semibold tracking-tighter text-lg">
          YouTube
        </Text>
      </View>
      <View className="flex-row items-center space-x-3">
        <MaterialCommunityIcons
          name="bell"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <FontAwesome
          name="search"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <Image source={{ uri: avatar }} className="h-7 w-7 rounded-full" />
      </View>
    </SafeAreaView>
  );
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              header: HeaderComponent,
            }}
          />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </>
  );
}
