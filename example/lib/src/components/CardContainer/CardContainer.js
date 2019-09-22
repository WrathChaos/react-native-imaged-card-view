import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Dimensions} from 'react-native';
import ImageContainer from '../ImageContainer/ImageContainer';
import StarReview from 'react-native-star-review';
const {width, height} = Dimensions.get('window');

const CardContainer = props => {
  const {title, subtitle} = props;
  return (
    <View
      style={{
        height: 170,
        width: width * 0.7,
        backgroundColor: '#0a96ea',
        borderRadius: 24,
        marginLeft: 48,
        alignSelf: 'center',
      }}>
      <ImageContainer />
      <View style={{marginLeft: 80, marginTop: 16, flexDirection: 'column'}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {title}
        </Text>
        <Text style={{color: '#dbdbdb', fontSize: 12, fontWeight: '400'}}>
          {subtitle}
        </Text>
        <StarReview
          stars={5}
          ratings={5}
          enableStars
          reviewsText=""
          reviews={1952}
          enableParentheses
          starColor="white"
          reviewTextStyle={{
            fontSize: 11,
            color: 'white',
            fontWeight: 'bold',
          }}
        />
      </View>
    </View>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

CardContainer.defaultProps = {
  title: 'Island Bali',
  subtitle: 'Indonesia',
};

export default CardContainer;
