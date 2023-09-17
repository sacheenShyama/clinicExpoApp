import { View, Text, Image } from "react-native";
import React from "react";

const CardHealthArticle = ({
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
        paddingBottom: paddingBottom ? paddingBottom : 0,
        paddingTop: paddingTop ? paddingTop : 15,
        paddingLeft: 13,
        paddingRight: 15,
        backgroundColor: backgroundColor ? backgroundColor : "white",
        borderRadius: borderRadius ? borderRadius : 15,
        width: width ? width : "auto",
        height: height ? height : "auto",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 185,
          backgroundColor: "#D0E5E6",
          borderRadius: 15,
        }}
      >
        {/* <Image
          source={image}
          width={imageWidth ? imageWidth : 300}
          height={imageHeight ? imageHeight : 184}
          style={{
            resizeMode: "contain",
          }}
        /> */}
      </View>
      <View
        style={{
          height: 36,
          marginRight: 15,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#3B3F3F",
          }}
        >
          Secrets of Healthy Life
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "#7C8485",
            marginTop: 7,
          }}
        >
          Pellentesque arcu arcu, volutpat nec magna ut, ultricies mattis nisl.
          Sed varius sem sem, vel lacinia ante interdum at.
        </Text>
      </View>
    </View>
  );
};

export default CardHealthArticle;
