import { View, Text, Image } from "react-native";
import React, { useState } from "react";
// import StarRating from "react-native-star-rating-widget";
import Stars from "react-native-stars";
import { FontAwesome } from "@expo/vector-icons";
const clinicbag = require("../assets/images/doctorBag.png");
const location = require("../assets/images/location.png");
const CardsingleDoctor = ({
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
  NameofDoctor,
  specialistof,
  Experiance,
  distance,
}) => {
  const [rating, setRating] = useState(5);
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
      <View style={{ marginLeft: 8 }}>
        <View style={{ marginTop: 8 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#3B3F3F",
            }}
          >
            {" "}
            {NameofDoctor}{" "}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "#7C8485",
              marginTop: 3,
            }}
          >
            {" "}
            {specialistof}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginLeft: 4,
          }}
        >
          <Image source={clinicbag} style={{}} />
          <Text style={{ marginLeft: 8 }}>{Experiance}</Text>
          <Image style={{ marginLeft: 14 }} source={location} />
          <Text style={{ marginLeft: 8 }}>{distance}</Text>
        </View>

        <View
          style={{
            alignItems: "flex-start",
            marginTop: 1,
          }}
        >
          <Stars
            default={2.5}
            count={5}
            half={true}
            spacing={5}
            starSize={15}
            fullStar={<FontAwesome name={"star"} size={15} color={"#F6A623"} />}
            emptyStar={
              <FontAwesome name={"star-o"} size={15} color={"#F6A623"} />
            }
            halfStar={
              <FontAwesome
                name={"star-half-full"}
                size={15}
                color={"#F6A623"}
              />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default CardsingleDoctor;
