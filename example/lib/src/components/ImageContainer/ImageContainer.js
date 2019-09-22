import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image} from 'react-native';
import Androw from 'react-native-androw';

const ImageContainer = props => {
  const {example} = props;
  return (
    <Androw
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
      }}>
      <Image
        borderRadius={24}
        style={{
          height: 170,
          width: 115,
          position: 'absolute',
          top: -16,
          left: -48,
        }}
        source={{
          uri:
            'https://images.unsplash.com/photo-1538689621163-f5be0ad13ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        }}
      />
    </Androw>
  );
};

ImageContainer.propTypes = {
  example: PropTypes.number,
};

ImageContainer.defaultProps = {
  example: 5,
};

export default ImageContainer;
