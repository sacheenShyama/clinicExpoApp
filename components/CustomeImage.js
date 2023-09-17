import React from "react";
import { Image, View } from "react-native";

const CustomeImage = ({
  viewBackgroundColor,
  imageBackgroundColor,
  imageContainerWidth,
  imageContainerHeight,
  image,
  imageAlignSelf,
  imageJustifyContent,
  imageContainerAlignSelf,
  imageContainerJustifyContent,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  borderRadius,
}) => {
  return (
    <View
      style={{
        backgroundColor: viewBackgroundColor ? viewBackgroundColor : "white",
        width: "100%",
        paddingTop: paddingTop ? paddingTop : 20,
        paddingRight: paddingRight ? paddingRight : 0,
        paddingBottom: paddingBottom ? paddingBottom : 10,
        paddingLeft: paddingLeft ? paddingLeft : 0,
      }}
    >
      <View
        style={{
          width: imageContainerWidth ? imageContainerWidth : "auto",
          height: imageContainerHeight ? imageContainerHeight : "auto",
          backgroundColor: imageBackgroundColor
            ? imageBackgroundColor
            : "transparent",
          alignSelf: imageContainerAlignSelf
            ? imageContainerAlignSelf
            : "center",
          justifyContent: imageContainerJustifyContent
            ? imageContainerJustifyContent
            : "center",
          borderRadius: borderRadius ? borderRadius : 0,
        }}
      >
        <Image
          source={image}
          style={{
            alignSelf: imageAlignSelf ? imageAlignSelf : "center",
            justifyContent: imageJustifyContent
              ? imageJustifyContent
              : "center",
          }}
        />
      </View>
    </View>
  );
};
export default CustomeImage;
