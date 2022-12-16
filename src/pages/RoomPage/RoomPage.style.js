import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {},
  floatingButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    height: "50%",
    width: "100%",
    padding: 35,
    alignItems: "center",
    bottom: -150,
    shadowColor: "orange",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 15,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    justifyContent: "flex-end",
    paddingHorizontal: 110,
    marginTop: 200,
  },
  buttonOpen: {
    backgroundColor: "orange",
  },
  buttonClose: {
    backgroundColor: "orange",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    marginBottom: 15,
    alignSelf: "flex-start",
  },
});
