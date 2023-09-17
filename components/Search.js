
import React from "react";
import { Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
const searchIcon = require("../assets/images/search.png");

const Search = ({ onChange }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "#FAFAFA",
        }}
      >
        <View style={styles.inputContainer}>
          <Image source={searchIcon} style={{ marginTop: 15 }} />
          <TextInput
            style={styles.InputStyle}
            placeholder={"Search "}
            keyboardType={"default"}
            onChange={onChange}
            placeholderTextColor="darkgray"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    paddingLeft: 10,
  },
  InputStyle: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    backgroundColor: "white",
    paddingLeft: 20,
    padding: 12,
  },
});
export default Search;
