import {
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { database } from "../../utils/firebase";
import { ref, set, onValue } from "firebase/database";
import FloatingActionButton from "react-native-floating-action-button";
import styles from "./RoomPage.style";
import RoomCard from "../../components/RoomCard/RoomCard";

const RoomPage = () => {
  const [roomData, setRoomData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [roomName, setRoomName] = useState("");

  function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) // lower alpha (a-z)
      ) {
        return false;
      }
    }
    return true;
  }

  function handleAddRoom() {
    set(ref(database, "rooms/" + roomName), roomName);
    set(
      ref(database, `${roomName}/` + "admin"),
      `${roomName} geliştiricileri ve meraklıları hoşgeldiniz :)`
    );
  }

  function getRooms() {
    const roomsRef = ref(database, "rooms");
    onValue(roomsRef, (snapshot) => {
      setRoomData(snapshot.val());
    });
  }

  useEffect(() => {
    getRooms();
  }, []);

  const renderRooms = ({ item }) => <RoomCard room={item} />;

  return (
    <View style={styles.container}>
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
              onChangeText={setRoomName}
              style={styles.input}
              placeholder="Oda adı..."
              multiline={true}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                if (!roomName) {
                  setModalVisible(!modalVisible);
                } else if (!isAlphaNumeric(roomName))
                  Alert.alert("Please enter better");
                else {
                  handleAddRoom();
                  setModalVisible(!modalVisible);
                }
              }}
            >
              <Text style={styles.textStyle}>Ekle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        keyExtractor={(item) => item}
        data={Object.values(roomData)}
        renderItem={renderRooms}
        numColumns={2}
      />
      <FloatingActionButton
        containerStyle={styles.floatingButton}
        iconName="plus"
        iconType="AntDesign"
        textDisable
        backgroundColor="orange"
        rippleColor="black"
        iconColor="white"
        onPress={() => setModalVisible(!modalVisible)}
      />
    </View>
  );
};

export default RoomPage;
