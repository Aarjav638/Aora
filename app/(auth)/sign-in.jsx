import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary h-full justify-center items-center">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-3xl text-white font-pbold text-center mt-6">
            Welcome Back!
          </Text>
          <Text className="text-sm font-psemibold text-secondary-100 mt-3 text-center">
            Sign in to continue
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
