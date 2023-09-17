import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import StarRating from "react-native-star-rating-widget";
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
          }}
        >
          <Image source={clinicbag} style={{}} />
          <Text style={{ marginLeft: 8 }}>{Experiance}</Text>
          <Image style={{ marginLeft: 14 }} source={location} />
          <Text style={{ marginLeft: 8 }}>{distance}</Text>
        </View>
        <StarRating
          starSize={15}
          color="#F6A623"
          rating={rating}
          onChange={setRating}
          style={{
            marginLeft: -8,
            marginTop: 5,
          }}
        />
      </View>
    </View>
  );
};

export default CardsingleDoctor;
