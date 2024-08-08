import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import CustomButton from "../../components/CustomButton";

interface FormState {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const SignUp: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateForm = (): boolean => {
    if (!form.email) {
      Alert.alert("Error", "Please enter your email");
      return false;
    }
    if (!form.password) {
      Alert.alert("Error", "Please enter your password");
      return false;
    }
    if (!form.name) {
      Alert.alert("Error", "Please enter your name");
      return false;
    }
    if (!form.phoneNumber) {
      Alert.alert("Error", "Please enter your phone number");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    try {
      if (!validateForm()) return;
      setIsLoading(true);
      console.log(form);
      Alert.alert("Success", "You have successfully Signed Up. Please Login", [
        {
          text: "OK",
          onPress: () => router.push("/sign-in"),
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
            className="w-[115px] h-[30px]"
          />
          <Text className="text-2xl text-white font-pbold mt-6">
            Welcome New User!
          </Text>
          <Text className="text-sm font-psemibold text-secondary-100 mt-3">
            Sign Up to continue
          </Text>
          <FormField
            title="Name"
            value={form.name}
            placeholder="Enter your Name"
            handleChange={(e) => {
              setForm({ ...form, name: e });
            }}
            keyboardType="default"
            textInputStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email.toLowerCase()}
            placeholder="Enter your email"
            handleChange={(e) => {
              setForm({ ...form, email: e });
            }}
            keyboardType="email-address"
            textInputStyles="mt-4"
          />
          <FormField
            title="Password"
            value={form.password}
            keyboardType="default"
            placeholder="Enter your password"
            handleChange={(e) => {
              setForm({ ...form, password: e });
            }}
            textInputStyles="mt-4"
          />
          <FormField
            title="Phone Number"
            value={form.phoneNumber}
            placeholder="Enter your Phone Number"
            handleChange={(e) => {
              setForm({ ...form, phoneNumber: e });
            }}
            keyboardType="phone-pad"
            textInputStyles="mt-4"
          />
          <CustomButton
            title="Signup"
            containerStyles="mt-8"
            onPress={handleSubmit}
            textStyles="font-psemibold"
            isLoading={isLoading}
          />
          <View className="flex-row mt-5 justify-center">
            <Text className="text-sm font-psemibold text-gray-100">
              Already have an account?{" "}
            </Text>
            <Link
              href="/sign-in"
              className="text-sm font-psemibold text-secondary-200"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
