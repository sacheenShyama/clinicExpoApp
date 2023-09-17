import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-virtualized-view";

import { Color, CustomBackgroundColor } from "../constants";
import Simpletext from "../components/SimpleText";
import Search from "../components/Search";
import Button from "../components/Button";
const doctorPng = require("../assets/images/doctor.png");
import { SafeAreaView } from "react-native-safe-area-context";

import CardsingleDoctor from "../components/CardsingleDoctor";

const { Text, View, FlatList } = require("react-native");

const Finddoctor = () => {
  const [buttonStates, setButtonStates] = React.useState([
    { key: "All Doctors", isClicked: false },
    { key: "Cardiologist", isClicked: false },
    { key: "Endocrinologist", isClicked: false },
    { key: "Neurologist", isClicked: false },
    { key: "Dentist", isClicked: false },
    { key: "Dermatologist", isClicked: false },
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
          <Simpletext
            SendText={"Find specialist Doctor"}
            fontSize={20}
            alignSelf={"flex-start"}
            height={50}
            fontWeight={500}
            color={Color.blackGrey}
            lineHeight={24}
          />
          <Search />
          <FlatList
            horizontal={false}
            numColumns={3}
            columnWrapperStyle={{ flexWrap: "wrap", flex: 1 }}
            data={[
              { key: "All Doctors", width: 103 },
              { key: "Cardiologist", width: 103 },
              { key: "Endocrinologist", width: 134 },
              { key: "Neurologist", width: 107 },
              { key: "Dentist", width: 77 },
              { key: "Dermatologist", width: 123 },
            ]}
            renderItem={({ item, index }) => (
              <Button
                color={buttonStates[index].isClicked ? "white" : "#7C8485"}
                title={item.key}
                fontSize={13}
                buttonWidth={item.width}
                paddingLeft={5}
                paddingRight={5}
                paddingTop={1}
                margin={0}
                paddingVertical={12}
                backgroundColor={
                  buttonStates[index].isClicked ? "#21A6AD" : "white"
                }
                onPress={() => handleChangeColor(index)}
              />
            )}
          />
          <FlatList
            data={[
              { key: "Cardiologist" },
              { key: "Endocrinologist" },
              { key: "Neurologist" },
              { key: "Dentist" },
              { key: "Dermatologist" },
            ]}
            renderItem={({ item }) => (
              <View style={{ paddingTop: 10 }}>
                <CardsingleDoctor
                  width={"100%"}
                  height={142}
                  padding={15}
                  paddingTop={13}
                  image={doctorPng}
                  imageHeight={114}
                  imageWidth={106}
                  NameofDoctor={"Dr. Magnoli Sinclair"}
                  specialistof={"Cardiologist"}
                  Experiance={"6 Years"}
                  distance={"500m away"}
                />
              </View>
            )}
          />
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Finddoctor;
