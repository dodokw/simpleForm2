import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import TinderCard from '../../components/secondBottom/secondIndex/Tinder';
import {
  AllscreenList,
  SecondBottomStackProps,
} from '../../navigation/NavigationProps';
import {CustomText} from '../../tools/CustomText';

const SecondIndex = ({}: SecondBottomStackProps<AllscreenList.SecondIndex>) => {
  return (
    <Container>
      <TinderCard />
      <CustomText>SecondBottom</CustomText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default SecondIndex;
