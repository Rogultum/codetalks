import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";

function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

export default App;
