import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Welcome() {
    return (
      // create a view with a text element inside

      <View style={styles.container}>
        <Text>Welcome to the app!</Text>
        <Button
          title="Go to the next screen"
          onPress={() => navigation.navigate("NextScreen")}
        />
      </View>
      //create a button element to navigate to the next screen
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

