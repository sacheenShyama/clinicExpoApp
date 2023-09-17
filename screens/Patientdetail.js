import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Input from "../components/Input";
import { SafeAreaView } from "react-native-safe-area-context";

import Simpletext from "../components/SimpleText";
import { Color, CustomBackgroundColor } from "../constants";
const { View, FlatList } = require("react-native");
import { SelectList } from "react-native-dropdown-select-list";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-virtualized-view";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Patientdetail = () => {
  const navigation =useNavigation();
  const genders = ["Male", "Female", "other"];
  const [selected, setSelected] = React.useState();

  const [buttonStates, setButtonStates] = React.useState([
    { key: "10+", isClicked: false },
    { key: "20+", isClicked: false },
    { key: "30+", isClicked: false },
    { key: "40+", isClicked: false },
    { key: "50+", isClicked: false },
    { key: "60+", isClicked: false },
    { key: "70+", isClicked: false },
    { key: "80+", isClicked: false },
  ]);
  const [kg, kgStates] = React.useState([
    { key: "50+", isClicked: false },
    { key: "60+", isClicked: false },
    { key: "70+", isClicked: false },
    { key: "80+", isClicked: false },
    { key: "90+", isClicked: false },
    { key: "100+", isClicked: false },
  ]);
  const handleChangeColor = (id) => {
    const updateState = buttonStates.map((button, index) => ({
      ...button,
      isClicked: id === index ? !button.isClicked : false,
    }));
    setButtonStates(updateState);
  };

  const handleChangeKG = (id) => {
    const updateState = kg.map((item, index) => ({
      ...item,
      isClicked: id === index ? !item.isClicked : false,
    }));
    kgStates(updateState);
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
            <Ionicons  onPress={() => {
                navigation.goBack();
              }} name="arrow-back-outline" size={25} color="black" />
            <Simpletext
              SendText={"Patient Details"}
              height={"auto"}
              fontSize={16}
              fontWeight={600}
            />
            <Ionicons name="ellipsis-vertical" size={20} color="black" />
          </View>
          <Simpletext
            SendText={"Full Name"}
            fontSize={16}
            alignSelf={"flex-start"}
            height={50}
            fontWeight={500}
            color={Color.blackGrey}
            lineHeight={24}
          />
          <Input
            paddingLeft={1}
            borderRadius={20}
            paddingRight={1}
            backgroundColor={"white"}
            containerBackgroundColor={"transparent"}
            placeholder={"Enter your name "}
          />
          <Simpletext
            SendText={"Gender"}
            fontSize={16}
            alignSelf={"flex-start"}
            height={60}
            fontWeight={500}
            color={Color.blackGrey}
            lineHeight={24}
          />
          <SelectList
            data={genders}
            boxStyles={{
              backgroundColor: "white",
              borderColor: "white",
              fontWeight: "bold",
            }}
            placeholder="Select Gender"
            setSelected={(val) => setSelected(val)}
            save="value"
          />

          <Simpletext
            SendText={"Select Your Age"}
            fontSize={16}
            alignSelf={"flex-start"}
            height={70}
            fontWeight={500}
            color={Color.blackGrey}
            lineHeight={24}
          />
          <FlatList
            horizontal
            data={[
              { key: "10+" },
              { key: "20+" },
              { key: "30+" },
              { key: "40+" },
              { key: "50+" },
              { key: "60+" },
              { key: "70+" },
              { key: "80+" },
            ]}
            renderItem={({ item, index }) => (
              <Button
                color={buttonStates[index].isClicked ? "white" : "#7C8485"}
                title={item.key}
                buttonWidth={80}
                fontSize={12}
                paddingVertical={15}
                paddingLeft={1}
                paddingTop={1}
                backgroundColor={
                  buttonStates[index].isClicked ? "#073436" : "white"
                }
                margin={0}
                onPress={() => handleChangeColor(index)}
              />
            )}
          />
          <Simpletext
            SendText={"Select Your Kg"}
            fontSize={16}
            alignSelf={"flex-start"}
            height={70}
            fontWeight={500}
            color={Color.blackGrey}
            lineHeight={24}
          />
          <FlatList
            horizontal
            data={[
              { key: "50+" },
              { key: "60+" },
              { key: "70+" },
              { key: "80+" },
              { key: "90+" },
              { key: "100+" },
            ]}
            renderItem={({ item, index }) => (
              <Button
                color={kg[index].isClicked ? "white" : "#7C8485"}
                title={item.key}
                buttonWidth={80}
                fontSize={12}
                paddingVertical={15}
                paddingLeft={1}
                paddingTop={1}
                backgroundColor={kg[index].isClicked ? "#073436" : "white"}
                margin={0}
                onPress={() => handleChangeKG(index)}
              />
            )}
          />
          <Simpletext
            SendText={"Write Your Problem"}
            fontSize={16}
            alignSelf={"flex-start"}
            height={70}
            fontWeight={500}
            color={Color.blackGrey}
            lineHeight={24}
          />
          <Input
            paddingLeft={1}
            borderRadius={20}
            paddingRight={1}
            backgroundColor={"white"}
            containerBackgroundColor={"transparent"}
            placeholder={"Type something... "}
            multiline={true}
            width={"90%"}
            height={100}
          />

          <Button
            borderRadius={25}
            title={"NEXT"}
            fontSize={12}
            fontWeight={700}
            paddingLeft={1}
            paddingVertical={15}
          />
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Patientdetail;
