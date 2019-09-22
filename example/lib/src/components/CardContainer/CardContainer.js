import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Dimensions} from 'react-native';
import ImageContainer from '../ImageContainer/ImageContainer';
import StarReview from 'react-native-star-review';
const {width, height} = Dimensions.get('window');

const CardContainer = props => {
  const {title, subtitle} = props;

  renderStarReview = () => {
    return (
      <View style={{alignSelf: 'flex-start', marginTop: 16}}>
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
    );
  };

  return (
    <View
      style={{
        height: 170,
        width: width * 0.75,
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
        {renderStarReview()}
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            alignSelf: 'flex-start',
            justifyContent: 'space-around',
          }}>
          <View style={{alignSelf: 'flex-start', flexDirection: 'column'}}>
            <Text style={{color: 'white', fontSize: 11}}>Days</Text>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                marginTop: 3,
                fontWeight: 'bold',
              }}>
              4 Days
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 1,
                height: 35,
                opacity: 0.5,
                marginLeft: 40,
                backgroundColor: '#c4c4c4',
              }}
            />
            <View
              style={{
                alignSelf: 'flex-start',
                marginLeft: 12,
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 11}}>Price</Text>
              <Text
                style={{
                  marginTop: 3,
                  fontSize: 12,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                $1500
              </Text>
            </View>
          </View>
        </View>
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
