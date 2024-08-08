import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
const FormField = ({
  title,
  value,
  placeholder,
  handleChange,
  textInputStyles,
  keyboardType,
}) => {
  const [showpassword, setShowPassword] = useState(true);
  return (
    <View className="space-y-2">
      <Text className={`text-base text-white font-pmedium ${textInputStyles}`}>
        {title}
      </Text>
      <View
        className={`flex-row items-center bg-black-100 border-black-200 focus:border-secondary border-2 h-14 rounded-2xl px-4 `}
      >
        <TextInput
          className=" text-white text-base font-psemibold w-[90%]"
          value={value}
          secureTextEntry={title === "Password" && showpassword ? true : false}
          onChangeText={handleChange}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          autoComplete={
            title === "Phone Number" ? "tel" : String(title).toLowerCase()
          }
        />

        {title === "Password" && (
          <TouchableWithoutFeedback
            onPress={() => setShowPassword(!showpassword)}
          >
            <Image
              className="absolute right-4 h-6 w-6"
              resizeMode="contain"
              tintColor={showpassword ? "#7b7b8b" : "#FF9C01"}
              source={showpassword ? icons.eye : icons.eyeHide}
            ></Image>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export default FormField;
