import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ChatPage.style";
import FloatingActionButton from "react-native-floating-action-button";
import { getAuth } from "firebase/auth";
import { database } from "../../utils/firebase";
import { ref, set, onValue } from "firebase/database";
import MessageCard from "../../components/MessageCard";

const ChatPage = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState();

  const auth = getAuth();
  const user = auth.currentUser;
  const username = user.email.split("@")[0];

  function getMessages() {
    const messagesRef = ref(database, route.params.room);
    onValue(messagesRef, (snapshot) => {
      setMessageList(snapshot.val());
    });
    console.log(messageList);
  }

  useEffect(() => {
    getMessages();
  }, []);

  function handleAddMessage() {
    set(
      ref(database, `${route.params.room}/` + Date.now()),
      `${message}${username}`
    );
  }

  const renderMessages = (item) => <MessageCard message={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{route.params.room} odası kuruldu!</Text>
      </View>
      <FlatList data={messageList} renderItem={renderMessages} />
      <FloatingActionButton
        containerStyle={styles.floatingButton}
        iconName="plus"
        iconType="AntDesign"
        textDisable
        backgroundColor="goldenrod"
        rippleColor="black"
        iconColor="white"
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              onChangeText={setMessage}
              style={styles.input}
              placeholder="Mesajın..."
              multiline={true}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                if (!message) setModalVisible(!modalVisible);
                else {
                  handleAddMessage();
                  setModalVisible(!modalVisible);
                }
              }}
            >
              <Text style={styles.textStyle}>Gönder</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChatPage;
