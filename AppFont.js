import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $manropeFontFamily: "Manrope-Regular.ttf",
});

const AppFont = EStyleSheet.create({
  customText: {
    fontFamily: "$manropeFontFamily",
  },
});

export default AppFont;
