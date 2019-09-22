import React from "react";
import { View } from "react-native";
import styles from "./ImagedCardView.style";
import CardContainer from "./CardContainer/CardContainer";

const ImagedCardView = props => {
  return (
    <View style={styles.container}>
      <CardContainer {...props} />
    </View>
  );
};

export default ImagedCardView;
