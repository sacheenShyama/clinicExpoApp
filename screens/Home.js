import { View, StyleSheet, FlatList, Text } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Simpletext from "../components/SimpleText";
import Search from "../components/Search";
import CardsingleDoctor from "../components/CardsingleDoctor";
import CarddocSpecialist from "../components/CarddocSpecialist";
import CardHealthArticle from "../components/CardHealthArticle";
const doctorPng = require("../assets/images/doctor.png");
const docOfcardio = require("../assets/images/cardio.png");
const healthArticle = require("../assets/images/HealthArticle.png");
import { Color, CustomBackgroundColor } from "../constants";

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: CustomBackgroundColor.BackgroundColor,
        flex: 1,
      }}
    >
      <ScrollView
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
            <Text style={style.iconStyle}>☰</Text>
            <Simpletext
              SendText={"Home"}
              height={42}
              fontSize={16}
              fontWeight={600}
            />
            <View style={style.avatar}></View>
          </View>
          <Simpletext
            SendText={"Good Morning, Sachin"}
            fontSize={20}
            alignSelf={"flex-start"}
            height={50}
            fontWeight={500}
            color={Color.blackGrey}
          />
          <Search />
          <View style={style.headerSeeall}>
            <Simpletext
              SendText={"Find specialist Doctor"}
              fontSize={17}
              alignSelf={"flex-start"}
              height={70}
              fontWeight={500}
              color={Color.blackGrey}
            />
            <Button
              color={Color.blackGrey}
              buttonWidth={"auto"}
              backgroundColor={"#FAFAFA"}
              title={"See All"}
              paddingVertical={0}
              paddingLeft={0}
              margin={0}
              fontSize={13}
              paddingTop={-10}
              paddingRight={-1}
              onPress={() => {
                navigate("Finddoctor");
              }}
            />
          </View>
          <View style={{ marginLeft: -10, marginTop: -14 }}>
            <FlatList
              horizontal
              data={[
                { key: "Cardiologist" },
                { key: "Endocrinologist" },
                { key: "Neurologist" },
                { key: "Dentist" },
              ]}
              renderItem={({ item }) => (
                <View style={{ padding: 10 }}>
                  <CarddocSpecialist
                    width={195}
                    height={72}
                    padding={15}
                    paddingTop={13}
                    image={docOfcardio}
                    doctorof={item.key}
                    numberofDoctor={"23 Doctors"}
                  />
                </View>
              )}
            />
          </View>
          <View style={style.headerSeeall}>
            <Simpletext
              SendText={"Top Doctor"}
              fontSize={17}
              alignSelf={"flex-start"}
              height={70}
              fontWeight={500}
              color={Color.blackGrey}
            />
            <Button
              color={Color.blackGrey}
              buttonWidth={"auto"}
              backgroundColor={"#FAFAFA"}
              title={"See All"}
              paddingVertical={0}
              paddingLeft={0}
              margin={0}
              fontSize={13}
              paddingTop={-10}
              paddingRight={-1}
            />
          </View>
          <View style={{ marginLeft: -10, marginTop: -14 }}>
            <FlatList
              horizontal
              data={[
                { key: "Cardiologist" },
                { key: "Endocrinologist" },
                { key: "Neurologist" },
                { key: "Dentist" },
              ]}
              renderItem={({ item }) => (
                <View style={{ padding: 10 }}>
                  <CardsingleDoctor
                    width={317}
                    height={142}
                    padding={15}
                    paddingTop={13}
                    image={doctorPng}
                    imageHeight={114}
                    imageWidth={96}
                    NameofDoctor={"Dr. Magnoli Sinclair"}
                    specialistof={"Cardiologist"}
                    Experiance={"6 Years"}
                    distance={"500m away"}
                  />
                </View>
              )}
            />
          </View>
          <View style={style.headerSeeall}>
            <Simpletext
              SendText={"Health Article"}
              fontSize={17}
              alignSelf={"flex-start"}
              height={70}
              fontWeight={500}
              color={Color.blackGrey}
            />
            <Button
              color={Color.blackGrey}
              buttonWidth={"auto"}
              backgroundColor={"#FAFAFA"}
              title={"See All"}
              paddingVertical={0}
              paddingLeft={0}
              margin={0}
              fontSize={13}
              paddingTop={-10}
              paddingRight={-1}
            />
          </View>
          <CardHealthArticle
            image={healthArticle}
            height={310}
            width={"100%"}
            imageHeight={184}
          />
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};
const style = StyleSheet.create({
  headerSeeall: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    height: 42,
    width: 42,
    backgroundColor: "#D0E5E6",
    borderRadius: 20,
  },
  iconStyle: {
    fontSize: 23,
    height: "auto",
    width: "auto",
    fontWeight: "bold",
    paddingTop: 5,
  },
});

export default Home;
