import { useEffect, useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ChatScreen from "./screens/ChatScreen";
import SplashScreen from "./screens/SplashScreen";
import { UsersList } from "./screens/UsersScreen";
import { AccountScreen } from "./screens/AccountScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "white",
  },
};

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsAuth(false);
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

  const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Users"
          options={{
            headerStyle: {
              backgroundColor: "#C1BFB5",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 8 }}
                onPress={() => alert("This is a button!")}
              >
                <View style={{backgroundColor: '#FEFDFF', borderRadius: 50, padding: 3}}>
                  <MaterialCommunityIcons name="magnify" size={30} />
                </View>
              </TouchableOpacity>
            ),
            tabBarLabel: "Users",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
          }}
          component={UsersList}
        />
        <Tab.Screen
          name="Account"
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
          component={AccountScreen}
        />
      </Tab.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={TabNavigator}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={MyTheme}>
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
