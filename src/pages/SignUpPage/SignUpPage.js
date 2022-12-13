import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import SignButton from "../../components/Button/SignButton/SignButton";
import styles from "./SignUpPage.style";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../utils/firebase";
import { ref, set } from "firebase/database";

const SignUpPage = () => {
  const navigation = useNavigation();

  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userPasswordCheck, setUserPasswordCheck] = useState(null);

  const handleSignUp = async () => {
    console.log("si");
    if (userPassword !== userPasswordCheck)
      return Alert.alert("Passwords don't match.");
    if (
      userPassword === null ||
      userMail === null ||
      userPasswordCheck === null
    )
      return Alert.alert("Missing Information");

    createUserWithEmailAndPassword(auth, userMail, userPassword).then(
      async (response) => {
        console.log(response);
        set(ref(database, "users/" + response.user.uid), {
          userMail,
        });
      }
    );

    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>codetalks</Text>
      <Input placeholder="e-postanızı giriniz..." onChangeText={setUserMail} />
      <Input
        placeholder="şifrenizi giriniz..."
        onChangeText={setUserPassword}
      />
      <Input
        placeholder="şifrenizi tekrar giriniz..."
        onChangeText={setUserPasswordCheck}
      />
      <SignButton title="Kayıt ol" onPress={handleSignUp} />
      <Text style={styles.back} onPress={() => navigation.navigate("SignIn")}>
        Geri
      </Text>
    </View>
  );
};

export default SignUpPage;
