import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import CustomButton from "../../components/CustomButton";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!form.email) {
      Alert.alert("Error", "Please enter your email");
      return false;
    }
    if (!form.password) {
      Alert.alert("Error", "Please enter your password");
      return false;
    }
    return true;
  };
  const [isloading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    try {
      if (!validateForm()) return;

      setIsLoading(true);
      console.log(form);
      Alert.alert("Success", "You have successfully logged in", [
        {
          text: "OK",
          onPress: () => router.push("/home"),
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-3xl text-white font-pbold  mt-6">
            Welcome Back!
          </Text>
          <Text className="text-sm font-psemibold text-secondary-100 mt-3">
            Sign in to continue
          </Text>
          <FormField
            title="Email"
            value={form.email.toLocaleLowerCase()}
            placeholder={"Enter your email"}
            handleChange={(e) => {
              setForm({ ...form, email: e });
            }}
            keyboardType={"email-address"}
            textInputStyles="mt-7"
          />
          <FormField
            title="Password"
            value={form.password}
            keyboardType={"password"}
            placeholder={"Enter your password"}
            secureTextEntry={true}
            handleChange={(e) => {
              setForm({ ...form, password: e });
            }}
            textInputStyles={"mt-4"}
          />
          <CustomButton
            title={"Login"}
            containerStyles={"mt-8"}
            onPress={handleSubmit}
            textStyles={"font-psemibold "}
            isLoading={isloading}
          />
          <View className="flex-row  mt-5 justify-center">
            <Text className="text-sm font-psemibold text-gray-100">
              Don't have an account?{" "}
            </Text>
            <Link
              href="/sign-up"
              className="text-sm font-psemibold text-secondary-200 "
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
