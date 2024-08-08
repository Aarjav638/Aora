import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  onPress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles} `}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
