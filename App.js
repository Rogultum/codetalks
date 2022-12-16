import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import RoomStackNavigation from "./src/navigation/RoomStackNavigation";

function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
      {/* <RoomStackNavigation /> */}
    </NavigationContainer>
  );
}

export default App;
