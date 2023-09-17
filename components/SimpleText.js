import { SafeAreaView, Text, View } from "react-native";
import React from "react";

const Simpletext = ({
  SendText,
  fontWeight,
  fontSize,
  textAlign,
  width,
  height,
  alignSelf,
  justifyContent,
  color,
  onPress,
  lineHeight,
}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: width ? width : "100%",
          height: height ? height : 140,
          justifyContent: justifyContent ? justifyContent : "center",
          alignSelf: alignSelf ? alignSelf : "center",
        }}
      >
        <Text
          onPress={onPress}
          style={{
            color: color ? color : "black",
            fontWeight: fontWeight,
            alignSelf: alignSelf ? alignSelf : "center",
            lineHeight: lineHeight ? lineHeight : 20,
            fontSize: fontSize ? fontSize : 16,
            textAlign: textAlign ? textAlign : "center",
          }}
        >
          {SendText}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Simpletext;
