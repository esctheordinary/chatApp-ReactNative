import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../config/firebase";

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (value, name) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (user.name === "" || user.email === "" || user.password === "") {
      ToastAndroid.show("Please input all fields", ToastAndroid.SHORT);
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((response) => {
          console.log('.then => response', response)
          const uid = response.user.uid;
          const data = {
            id: uid,
            email: user.email,
            name: user.name,
          };
          const usersRef = firebase.firestore().collection("users");
          usersRef
            .doc(uid)
            .set(data)
            .then((res) => {
              console.log('.then => res', res)
              navigation.navigate("SignIn");
              ToastAndroid.show(
                "Account successfully created, Please login",
                ToastAndroid.SHORT
              );
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}> ChatApp </Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          value={user.name}
          placeholderTextColor="#003f5c"
          onChangeText={(name) => {
            handleChange(name, "name");
          }}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={user.email}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => {
            handleChange(email, "email");
          }}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          value={user.password}
          secureTextEntry={true}
          onChangeText={(password) => {
            handleChange(password, "password");
          }}
        />
      </View>

      <TouchableOpacity onPress={() => handleSubmit()} style={styles.signUpBtn}>
        <Text style={styles.loginText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.login_text}>
        <Text>Have an account ? </Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.login_btn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#C4DDFF",
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  signUpBtn: {
    width: "80%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#7FB5FF",
  },

  signUpBtnDisabled: {
    width: "80%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#C1BFB5",
  },

  logoText: {
    color: "#7FB5FF",
    fontSize: 30,
    marginBottom: 40,
  },

  login_text: {
    flexDirection: "row",
    marginTop: 8,
  },

  login_btn: {
    color: "#001D6E",
    borderRadius: 5,
  },
});

export default SignIn;
