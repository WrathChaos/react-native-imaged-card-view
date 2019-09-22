import React from 'react';
import PropTypes from 'prop-types';
import {View, Dimensions} from 'react-native';
import CardContainer from './CardContainer/CardContainer';

const {width, height} = Dimensions.get('window');

const ImagedCardView = props => {
  const {example} = props;
  return (
    <View
      style={{
        height: 160,
        width: width * 0.9,
        backgroundColor: 'transparent',
        alignSelf: 'center',
      }}>
      <CardContainer />
    </View>
  );
};

ImagedCardView.propTypes = {
  example: PropTypes.number,
};

ImagedCardView.defaultProps = {
  example: 5,
};

export default ImagedCardView;
