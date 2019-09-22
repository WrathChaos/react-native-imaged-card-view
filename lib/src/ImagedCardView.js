import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./ImagedCardView.style";
import CardContainer from "./components/CardContainer/CardContainer";

const ImagedCardView = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <CardContainer {...props} />
    </TouchableOpacity>
  );
};

export default ImagedCardView;
