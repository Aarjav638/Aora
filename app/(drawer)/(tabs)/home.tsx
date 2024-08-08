import { View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const Home:React.FC = () => {
  return (
    <View className="flex-1 h-full ">
      <WebView
        source={{ uri: "https://reactnative.dev/" }}
        className="flex-1 h-full"
      />
    </View>
  );
};

export default Home;
