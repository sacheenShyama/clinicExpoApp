import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { StyleSheet, View } = require("react-native");
import { CustomBackgroundColor } from "../constants";
import Simpletext from "../components/SimpleText";

import Button from "../components/Button";

import { CreditCardInput } from "react-native-payment-card";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-virtualized-view";

const Payment = () => {
  const navigation = useNavigation();

  const handleCardInputChange = (formData) => {
    console.log(formData);
  };
  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: CustomBackgroundColor.BackgroundColor,
      }}
    >
      <ScrollView
        nestedScrollEnabled={true}
        style={{
          backgroundColor: CustomBackgroundColor.BackgroundColor,
        }}
      >
        <SafeAreaView style={{ padding: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
              paddingBottom: 30,
            }}
          >
            <Ionicons
              onPress={() => {
                navigation.goBack();
              }}
              name="arrow-back-outline"
              size={25}
              color="black"
            />
            <Simpletext
              SendText={"Payment"}
              height={"auto"}
              fontSize={16}
              fontWeight={600}
            />
            <Ionicons name="ellipsis-vertical" size={20} color="black" />
          </View>
          <CreditCardInput
            style={{ margin: 0 }}
            autoFocus
            requiresName
            requiresCVC
            labelStyle={style.labelStyles}
            inputStyle={style.inputStyles}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onChange={handleCardInputChange}
          />
          <Button
            borderRadius={25}
            title={"PAY NOW"}
            fontSize={12}
            fontWeight={700}
            paddingLeft={35}
            paddingRight={35}
            paddingVertical={13}
          />
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const style = StyleSheet.create({
  labelStyles: {
    color: "black",
    fontSize: 16,
  },
  inputStyles: {
    marginTop: 15,
    marginLeft: 0,
    padding: 10,
  },
});

export default Payment;
