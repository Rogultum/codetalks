import { Text, View } from "react-native";
import React from "react";
import styles from "./MessageCard.style";

const MessageCard = (props) => {
  console.log("BEN GELDIm", props.message);
  return (
    <View>
      <Text>{"props"}</Text>
    </View>
  );
};

export default MessageCard;
