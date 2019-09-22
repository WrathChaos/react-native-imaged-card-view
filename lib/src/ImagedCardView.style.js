import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default {
  container: {
    height: 160,
    width: width * 0.9,
    alignSelf: "center",
    backgroundColor: "transparent"
  }
};
