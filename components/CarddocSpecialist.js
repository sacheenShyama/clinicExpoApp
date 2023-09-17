import { View, Text, Image } from "react-native";
import React from "react";

const CarddocSpecialist = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  image,
  imageWidth,
  imageHeight,
  padding,
  doctorof,
  numberofDoctor,
  paddingBottom,
  paddingTop,
}) => {
  return (
    <View
      style={{
        padding: padding ? padding : 10,
        paddingBottom: paddingBottom ? paddingBottom : 1,
        paddingTop: paddingTop ? paddingTop : 1,
        backgroundColor: backgroundColor ? backgroundColor : "white",
        borderRadius: borderRadius ? borderRadius : 15,
        width: width ? width : "auto",
        height: height ? height : "auto",
        flexDirection: "row",
      }}
    >
      <View>
        <Image source={image} width={imageWidth} />
      </View>
      <View
        style={{
          height: 36,
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "#3B3F3F",
          }}
        >
          {" "}
          {doctorof}{" "}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "#7C8485",
          }}
        >
          {" "}
          {numberofDoctor}{" "}
        </Text>
      </View>
    </View>
  );
};

export default CarddocSpecialist;
