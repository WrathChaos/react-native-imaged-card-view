import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import CardContainer from "./CardContainer/CardContainer";

const ImagedCardView = props => {
  const { example } = props;
  return (
    <View>
      <CardContainer />
    </View>
  );
};

ImagedCardView.propTypes = {
  example: PropTypes.number
};

ImagedCardView.defaultProps = {
  example: 5
};

export default ImagedCardView;
