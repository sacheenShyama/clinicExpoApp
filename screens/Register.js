import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Simpletext from "../components/SimpleText";
import Input from "../components/Input";
import Button from "../components/Button";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const phoneIcon = require("../assets/images/phone.png");
const person = require("../assets/images/person.png");
const envelop = require("../assets/images/envelopeclosed.png");

const Register = () => {
  const { navigate } = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <ScrollView>
          <Simpletext
            SendText={
              "Your phone number is not registered yet. let us know basic details for registration"
            }
            fontWeight={"normal"}
            textAlign={"center"}
            height={170}
          />
          <Input
            Icon={phoneIcon}
            placeholder={"Mobile Number "}
            paddingTop={10}
            paddingBottom={15}
            keyboardType={"numeric"}
          />
          <Input
            Icon={person}
            placeholder={"Full Name "}
            paddingTop={10}
            paddingBottom={15}
            keyboardType={"default"}
          />
          <Input
            Icon={envelop}
            placeholder={"Email Address "}
            paddingTop={10}
            paddingBottom={15}
            IconMarginTop={17}
            keyboardType={"email-address"}
          />
          <Button
            title={"Login"}
            onPress={() => {
              navigate("Login");
            }}
            paddingVertical={13}
          />
          <Simpletext
            SendText={"Back to sign in"}
            fontWeight={"bold"}
            height={150}
          />
          <Simpletext
            SendText={"We,ll send an OTP on above given phone number"}
            height={100}
            width={270}
            textAlign={"center"}
          />
          <View style={{ height: 100, backgroundColor: "white" }}></View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Register;
