import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Color, Fonts } from "../constants";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const Button = ({
  buttonWidth,
  onPress,
  disabled,
  title,
  loading,
  isIcon,
  icon,
  alignSelf,
  margin,
  marginBottom,
  fontSize,
  fontWeight,
  paddingVertical,
  backgroundColor,
  paddingLeft,
  color,
  paddingRight,
  paddingTop,
  buttonTextAlign,
  borderRadius,
}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handlePress = () => {
    setIsClicked(!isClicked);
    if (onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: buttonWidth ? buttonWidth : "100%",
          alignSelf: alignSelf ? alignSelf : "center",
          paddingVertical: paddingVertical,
          borderColor: disabled ? "none" : "none",
          borderWidth: 0,
          margin: margin === undefined ? 10 : margin,
          marginBottom: marginBottom === undefined ? 0 : marginBottom,
        },
      ]}
      onPress={handlePress}
    >
      <View
        style={{
          paddingTop: paddingTop ? paddingTop : 10,
          paddingLeft: paddingLeft ? paddingLeft : 20,
          paddingRight: paddingRight ? paddingRight : 20,
          width: buttonWidth ? buttonWidth : "100%",
        }}
      >
        <View
          style={{
            opacity: loading ? 0.5 : 1,
            backgroundColor: backgroundColor ? backgroundColor : "#21A6AD",
            borderRadius: borderRadius ? borderRadius : 10,
            width: "100%",
            paddingVertical: paddingVertical,
          }}
        >
          {isIcon ? <Image source={icon} style={styles.iconStyle} /> : null}
          <Text
            allowFontScaling={false}
            style={[
              styles.buttonTitle,
              {
                fontWeight: fontWeight ? fontWeight : "normal",
                color: color ? color : Color.white,
                fontSize: fontSize ? fontSize : 18,
                alignSelf: buttonTextAlign ? buttonTextAlign : "center",
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginEnd: 10,
  },
  buttonTitle: {
    fontSize: 18,
    fontFamily: "sans-serif",
  },
});

// Button.propTypes = {
//   title: PropTypes.string,
//   disabled: PropTypes.bool,
//   loading: PropTypes.bool,
//   isIcon: PropTypes.bool,
//   icon: PropTypes.any,
//   buttonWidth: PropTypes.any,
//   paddingVertical: PropTypes.number,
//   onPress: PropTypes.func,
// };

// Button.defaultProps = {
//   type: "Continue",
//   title: "Submit",
//   buttonWidth: "100%",
//   disabled: false,
//   loading: false,
//   isIcon: false,
//   paddingVertical: 14,
//   onPress: null,
// };
