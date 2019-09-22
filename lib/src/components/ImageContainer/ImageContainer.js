import React from "react";
import { Image } from "react-native";
import Androw from "react-native-androw";
import styles from "./ImageContainer.style";

const defaultImage =
  "https://images.unsplash.com/photo-1538689621163-f5be0ad13ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

const ImageContainer = props => {
  const { shadowStyle, source } = props;
  return (
    <Androw style={shadowStyle}>
      <Image borderRadius={24} style={styles.imageStyle} source={source} />
    </Androw>
  );
};

ImageContainer.defaultProps = {
  shadowStyle: styles.shadowStyle,
  source: {
    uri: defaultImage
  }
};

export default ImageContainer;
