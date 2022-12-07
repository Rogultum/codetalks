import React from "react";
import { View, Text } from "react-native";

import styles from "./SignButton.style";

function SignButton({ title, onPress, accessibilityLabel }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={onPress}
        accessibilityLabel={accessibilityLabel}
      >
        {title}
      </Text>
    </View>
  );
}

export default SignButton;
