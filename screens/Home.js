import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title={"finddoctor"}
        paddingVertical={15}
        onPress={() => {
          navigate("Finddoctor");
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
