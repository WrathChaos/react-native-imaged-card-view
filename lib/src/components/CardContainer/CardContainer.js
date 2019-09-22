import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import Androw from "react-native-androw";
import StarReview from "react-native-star-review";
import ImageContainer from "../ImageContainer/ImageContainer";
import styles, {
  container,
  titleStyle,
  dividerStyle,
  subtitleStyle,
  leftSideTitleStyle,
  leftSideValueStyle,
  rightSideTitleStyle,
  rightSideValueStyle
} from "./CardContainer.style";

const { width } = Dimensions.get("window");

const CardContainer = props => {
  const {
    title,
    width,
    height,
    subtitle,
    titleColor,
    borderRadius,
    dividerColor,
    leftSideTitle,
    leftSideValue,
    leftSideColor,
    subtitleColor,
    rightSideTitle,
    rightSideValue,
    rightSideColor,
    backgroundColor,
    leftSideValueColor,
    rightSideValueColor
  } = props;

  renderStarReview = () => {
    return (
      <View style={styles.starReviewStyle}>
        <StarReview
          stars={5}
          ratings={5}
          enableStars
          reviewsText=""
          reviews={1952}
          enableParentheses
          starColor="white"
          reviewTextStyle={styles.reviewTextStyle}
          {...props}
        />
      </View>
    );
  };

  return (
    <Androw style={container(width, height, borderRadius, backgroundColor)}>
      <ImageContainer {...props} />
      <View style={styles.contentContainer}>
        <Text style={titleStyle(titleColor)}>{title}</Text>
        <Text style={subtitleStyle(subtitleColor)}>{subtitle}</Text>
        {renderStarReview()}
        <View style={styles.footerContainer}>
          <View style={styles.leftSideContainer}>
            <Text style={leftSideTitleStyle(leftSideColor)}>
              {leftSideTitle}
            </Text>
            <Text style={leftSideValueStyle(leftSideValueColor)}>
              {leftSideValue}
            </Text>
          </View>
          <View style={styles.rightSideContainer}>
            <View style={dividerStyle(dividerColor)} />
            <View style={styles.rightSideContainerGlue}>
              <Text style={rightSideTitleStyle(rightSideColor)}>
                {rightSideTitle}
              </Text>
              <Text style={rightSideValueStyle(rightSideValueColor)}>
                {rightSideValue}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Androw>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  subtitle: PropTypes.string,
  titleColor: PropTypes.string,
  borderRadius: PropTypes.number,
  dividerColor: PropTypes.string,
  leftSideColor: PropTypes.string,
  leftSideTitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  leftSideValue: PropTypes.string,
  rightSideValue: PropTypes.string,
  rightSideColor: PropTypes.string,
  rightSideTitle: PropTypes.string,
  backgroundColor: PropTypes.string,
  leftSideValueColor: PropTypes.string,
  rightSideValueColor: PropTypes.string
};

CardContainer.defaultProps = {
  height: 170,
  borderRadius: 24,
  width: width * 0.75,
  titleColor: "white",
  title: "Island Bali",
  leftSideTitle: "Days",
  subtitle: "Indonesia",
  leftSideColor: "white",
  dividerColor: "#c4c4c4",
  leftSideValue: "4 Days",
  rightSideColor: "white",
  rightSideValue: "$1500",
  rightSideTitle: "Price",
  subtitleColor: "#dbdbdb",
  backgroundColor: "#0a96ea",
  leftSideValueColor: "white",
  rightSideValueColor: "white"
};

export default CardContainer;
