import { Pressable, Text } from "react-native";
import React from "react";
import styles from "./RoomCard.style";
import { useNavigation } from "@react-navigation/native";

const RoomCard = (props) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Chat", { room: props.room })}
      style={styles.container}
    >
      <Text style={styles.title}>{props.room}</Text>
    </Pressable>
  );
};

export default RoomCard;
