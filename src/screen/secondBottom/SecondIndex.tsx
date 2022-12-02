import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  AllscreenList,
  SecondBottomStackProps,
} from '../../navigation/NavigationProps';

const SecondIndex = ({}: SecondBottomStackProps<AllscreenList.SecondIndex>) => {
  return (
    <Container>
      <CustomText>SecondBottom</CustomText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const CustomText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export default SecondIndex;
