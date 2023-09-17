import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
const Login = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <Button
        title={"Login"}
        onPress={() => {
          navigate("TabGroup");
        }}
        paddingVertical={15}
      />
      <Button
        title={"Register"}
        onPress={() => {
          navigate("Register");
        }}
        paddingVertical={15}
      />
    </SafeAreaView>
  );
};

export default Login;
