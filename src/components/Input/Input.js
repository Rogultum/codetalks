import React from "react";
import { View, TextInput, Text } from "react-native";

import styles from "./Input.style";

function Input({
  label,
  placeholder,
  onChangeText,
  secureTextEntry,
  value,
  onFocus,
  onBlur,
  right,
  left,
  mode,
  defaultValue,
}) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.label]}>{label}</Text>
      <View style={[styles.input_container]}>
        <TextInput
          autoCapitalize="none"
          defaultValue={defaultValue}
          value={value}
          style={[styles.text_input]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
}

export default Input;
