import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as Yup from "yup";
import Formik from "formik";

export default function Welcome({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

 
  const onChangeText = (name) => {
    setName(name);
  };

  const onChangeEmail = (email) => {
    setEmail(email);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("name:", name);
    console.log("email:", email);

  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the app!</Text>
      <Text>yoooo</Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => onChangeText(name)}
        value={name}
        placeholder="Enter your name"
        validationSchema={validationSchema}
      />
      <Text>Enter your Email</Text>
  
      <TextInput
        style={styles.input}
        onChangeText={(email) => onChangeEmail(email)}
        value={email}
        placeholder="Enter your email"
        validationSchema={validationSchema}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button
        title="Go to the next screen"
        onPress={() => navigation.navigate("NextScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 200,
  },
});
