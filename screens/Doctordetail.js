import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Color, CustomBackgroundColor } from "../constants";
import Simpletext from "../components/SimpleText";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import CardsingleDoctor from "../components/CardsingleDoctor";
const doctorpng = require("../assets/images/doctor.png");
const { View, FlatList } = require("react-native");
import { ScrollView } from "react-native-virtualized-view";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Doctordetail = () => {
  const navigation = useNavigation();

  const [buttonStates, setButtonStates] = React.useState([
    { key: "09:00 AM", isClicked: false },
    { key: "10:00 AM", isClicked: false },
    { key: "11:00 AM", isClicked: false },
    { key: "12:00 PM", isClicked: false },
    { key: "01:00 PM", isClicked: false },
    { key: "02:00 PM", isClicked: false },
    { key: "03:00 PM", isClicked: false },
    { key: "04:00 PM", isClicked: false },
    { key: "05:00 PM", isClicked: false },
  ]);
  const handleChangeColor = (id) => {
    const updateState = buttonStates.map((button, index) => ({
      ...button,
      isClicked: id === index ? !button.isClicked : false,
    }));
    setButtonStates(updateState);
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
              SendText={"Doctor Details"}
              height={"auto"}
              fontSize={16}
              fontWeight={600}
            />
            <Ionicons name="ellipsis-vertical" size={20} color="black" />
          </View>
          <View style={{ paddingTop: 10 }}>
            <CardsingleDoctor
              width={"100%"}
              height={142}
              padding={15}
              paddingTop={13}
              image={doctorpng}
              imageHeight={114}
              imageWidth={106}
              NameofDoctor={"Dr. Magnoli Sinclair"}
              specialistof={"Cardiologist"}
              Experiance={"6 Years"}
              distance={"500m away"}
            />
          </View>
          <Simpletext
            SendText={"About Doctor"}
            fontSize={16}
            alignSelf={"flex-start"}
            height={50}
            fontWeight={500}
            color={Color.blackGrey}
            lineHeight={24}
          />
          <Simpletext
            SendText={
              "Vivamus sit amet dictum purus, blandit mattis libero. Suspendisse potenti. Mauris posuere vel diam facilisis varius . Ut molestie interdum"
            }
            fontSize={12}
            alignSelf={"flex-start"}
            textAlign={"left"}
            height={60}
            fontWeight={400}
            color={"#7C8485"}
            lineHeight={20}
          />
          <Simpletext
            SendText={
              "Morbi pellentesque risus mauris, a volutpat nisl tristique at. Vestibulum sed malesuada nibh ut massa felis doctor."
            }
            fontSize={12}
            alignSelf={"flex-start"}
            height={60}
            textAlign={"left"}
            fontWeight={400}
            color={"#7C8485"}
            lineHeight={20}
          />
          <View>
            <FlatList
              horizontal={false}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              numColumns={3}
              data={[
                { key: "09:00 AM" },
                { key: "10:00 AM" },
                { key: "11:00 AM" },
                { key: "12:00 PM" },
                { key: "01:00 PM" },
                { key: "02:00 PM" },
                { key: "03:00 PM" },
                { key: "04:00 PM" },
                { key: "05:00 PM" },
              ]}
              renderItem={({ item, index }) => (
                <Button
                  color={buttonStates[index].isClicked ? "white" : "#7C8485"}
                  title={item.key}
                  buttonWidth={105}
                  fontSize={12}
                  paddingVertical={15}
                  paddingLeft={1}
                  paddingRight={2}
                  paddingTop={1}
                  backgroundColor={
                    buttonStates[index].isClicked ? "#073436" : "white"
                  }
                  margin={0}
                  onPress={() => handleChangeColor(index)}
                />
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1 }}>
              <Button
                borderRadius={25}
                title={"BOOK APPOINTMENT"}
                fontSize={12}
                fontWeight={700}
                paddingLeft={1}
                paddingRight={20}
                paddingVertical={15}
              />
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#21A6AD",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Ionicons
                name="chatbox-ellipses-outline"
                size={30}
                color="#21A6AD"
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Doctordetail;
