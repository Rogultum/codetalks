import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoomPage from "../pages/RoomPage/RoomPage";
import ChatPage from "../pages/ChatPage/ChatPage";

const Stack = createNativeStackNavigator();

const RoomStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleStyle: { color: "orange" } }}>
      <Stack.Screen name="Room" component={RoomPage} />
      <Stack.Screen
        name="Chat"
        component={ChatPage}
        options={({ route }) => ({ title: route.params.room })}
      />
    </Stack.Navigator>
  );
};

export default RoomStackNavigation;
