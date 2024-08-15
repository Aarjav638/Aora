import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import CustomButton from "../../components/CustomButton";

interface FormState {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const isValid = emailPattern.test(email);
    setEmailError(isValid ? "" : "Please check your email address.");
    return isValid;
  };

  const validatePassword = (password: string): boolean => {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push("Password must contain at least one special character.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }

    setPasswordErrors(errors);
    return errors.length === 0;
  };

  const validateForm = (): boolean => {
    const isEmailValid = validateEmail(form.email);
    const isPasswordValid = validatePassword(form.password);

    if (!form.email) {
      Alert.alert("Error", "Please enter your email");
      return false;
    }
    if (!form.password) {
      Alert.alert("Error", "Please enter your password");
      return false;
    }
    return isEmailValid && isPasswordValid;
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
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
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-3xl text-white font-pbold mt-6">
            Welcome Back!
          </Text>
          <Text className="text-sm font-psemibold text-secondary-100 mt-3">
            Sign in to continue
          </Text>

          <FormField
            title="Email"
            value={form.email.toLowerCase()}
            placeholder="Enter your email"
            handleChange={(e) => {
              setForm({ ...form, email: e });
              validateEmail(e); // validate on change
            }}
            keyboardType="email-address"
            textInputStyles="mt-7"
          />
          {!!emailError && <Text className="text-red-500">{emailError}</Text>}

          <FormField
            title="Password"
            value={form.password}
            keyboardType="default"
            placeholder="Enter your password"
            secureTextEntry={true}
            handleChange={(e) => {
              setForm({ ...form, password: e });
              validatePassword(e); // validate on change
            }}
            textInputStyles="mt-4"
          />
          {passwordErrors.length > 0 && (
            <View className="mt-2">
              <Text className="text-red-500">
                *Please enter a password that matches the following criteria:
              </Text>
              {passwordErrors.map((error, index) => (
                <Text key={index} className="text-red-500">
                  - {error}
                </Text>
              ))}
            </View>
          )}

          <CustomButton
            title="Login"
            containerStyles="mt-8"
            onPress={handleSubmit}
            textStyles="font-psemibold"
            isLoading={isLoading}
          />

          <View className="flex-row mt-5 justify-center">
            <Text className="text-sm font-psemibold text-gray-100">
              Don't have an account?{" "}
            </Text>
            <Link
              href="/sign-up"
              className="text-sm font-psemibold text-secondary-200"
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
