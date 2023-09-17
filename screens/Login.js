import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Simpletext from "../components/SimpleText";
import Button from "../components/Button";
import CustomeImage from "../components/CustomeImage";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
const phoneIcon = require("../assets/images/phone.png");
const Mainimage = require("../assets/images/login_banner.png");
const Plus = require("../assets/images/plus.png");

const Login = () => {
  const { navigate } = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView nestedScrollEnabled={true}>
        <SafeAreaView style={{ backgroundColor: "white" }}>
          <CustomeImage
            image={Plus}
            viewBackgroundColor={"#D0E5E6"}
            imageBackgroundColor={"white"}
            imageContainerHeight={82}
            imageContainerWidth={89}
            imageAlignSelf={"center"}
            imageJustifyContent={"center"}
            imageContainerAlignSelf={"center"}
            imageContainerJustifyContent={"center"}
            paddingTop={30}
            paddingRight={0}
            paddingBottom={10}
            paddingLeft={0}
            borderRadius={10}
          />
          <CustomeImage
            image={Mainimage}
            viewBackgroundColor={"#D0E5E6"}
            imageContainerHeight={265}
            imageContainerWidth={396}
            imageAlignSelf={"center"}
            imageJustifyContent={"center"}
            imageContainerAlignSelf={"center"}
            imageContainerJustifyContent={"center"}
            paddingTop={30}
            paddingRight={0}
            paddingBottom={15}
            paddingLeft={0}
          />
          <Input
            Icon={phoneIcon}
            placeholder="Enter Mobile Number "
            paddingTop={25}
            keyboardType={"numeric"}
          />
          <Button
            title={"Login"}
            onPress={() => {
              navigate("TabGroup");
            }}
            paddingVertical={13}
          />
          <Simpletext
            SendText={"Or click on register if you'r new "}
            fontWeight={"bold"}
            textAlign={"center"}
            height={30}
          />
          <Button
            title={"Register"}
            onPress={() => {
              navigate("Register");
            }}
            paddingVertical={13}
          />

          <Simpletext
            SendText={"Or quick continue with"}
            fontWeight={"bold"}
            textAlign={"center"}
            height={60}
          />
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Login;
