import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ChatScreen from "./screens/ChatScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsAuth(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: "Sign In", 
            animationTypeForReplace: isAuth ? "pop" : "push",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "Sign Up",
            animationTypeForReplace: isAuth ? "pop" : "push",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="chatbubbles-sharp" size={24} color={color} />;
          },
        }}
      >
        <Tab.Screen name="Chats" component={ChatScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
