import React from 'react';
import {View, Animated, Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Color} from '../../../tools/Color';
import {hp, wp} from '../../../tools/UI';

//Tinder Card
// 참고용 -> import TinderCard from 'react-tinder-card';

const TinderCard = () => {
  return (
    <Container activeOpacity={0.8}>
      <Image
        resizeMode="stretch"
        source={require('../../../assets/image/forTest.jpeg')}
        style={{width: wp(200), height: hp(200)}}
      />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  height: ${hp(200)};
  width: ${wp(200)};
  background-color: ${Color.green};
`;

export default TinderCard;
