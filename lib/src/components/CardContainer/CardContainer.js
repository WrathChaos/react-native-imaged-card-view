import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const CardContainer = props => {
  const { title } = props;
  return (
    <View
      style={{
        height: 150,
        width: width * 0.8,
        backgroundColor: "#0a96ea",
        borderRadius: 16
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string
};

CardContainer.defaultProps = {
  title: "Island Bali"
};

export default CardContainer;
