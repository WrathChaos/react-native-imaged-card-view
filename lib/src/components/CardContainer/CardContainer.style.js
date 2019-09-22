export function container(width, height, borderRadius, backgroundColor) {
  return {
    width,
    height,
    borderRadius,
    marginLeft: 48,
    backgroundColor,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.4,
    shadowRadius: 6
  };
}

export function titleStyle(titleColor) {
  return {
    fontSize: 18,
    color: titleColor,
    fontWeight: "bold"
  };
}

export function subtitleStyle(subtitleColor) {
  return {
    fontSize: 12,
    fontWeight: "400",
    color: subtitleColor
  };
}

export function leftSideTitleStyle(leftSideColor) {
  return {
    fontSize: 11,
    color: leftSideColor
  };
}

export function leftSideValueStyle(leftSideValueColor) {
  return {
    fontSize: 12,
    marginTop: 3,
    fontWeight: "bold",
    color: leftSideValueColor
  };
}

export function dividerStyle(dividerColor) {
  return {
    width: 1,
    height: 35,
    opacity: 0.5,
    marginLeft: 40,
    backgroundColor: dividerColor
  };
}

export function rightSideTitleStyle(rightSideColor) {
  return {
    fontSize: 11,
    color: rightSideColor
  };
}

export function rightSideValueStyle(rightSideValueColor) {
  return {
    marginTop: 3,
    fontSize: 12,
    fontWeight: "bold",
    color: rightSideValueColor
  };
}

export default {
  starReviewStyle: {
    marginTop: 16,
    alignSelf: "flex-start"
  },
  reviewTextStyle: {
    fontSize: 11,
    color: "white",
    fontWeight: "bold"
  },
  contentContainer: {
    marginTop: 16,
    marginLeft: 80,
    flexDirection: "column"
  },
  footerContainer: {
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "space-around"
  },
  leftSideContainer: {
    alignSelf: "flex-start",
    flexDirection: "column"
  },
  rightSideContainer: { flexDirection: "row" },
  rightSideContainerGlue: {
    marginLeft: 12,
    alignSelf: "flex-start",
    flexDirection: "column"
  }
};
