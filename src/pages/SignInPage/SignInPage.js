import { View, Text } from "react-native";
import React from "react";
import Input from "../../components/Input";
import SignButton from "../../components/Button/SignButton/SignButton";
import styles from "./SignInPage.style";
import { useNavigation } from "@react-navigation/native";

const SignInPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>codetalks</Text>
      <Input placeholder="e-postanızı giriniz..." />
      <Input placeholder="şifrenizi giriniz..." />
      <SignButton title="Giriş Yap" />
      <SignButton
        title="Kayıt Ol"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default SignInPage;
