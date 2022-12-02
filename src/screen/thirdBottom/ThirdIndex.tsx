import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  AllscreenList,
  ThirdBottomStackProps,
} from '../../navigation/NavigationProps';

const ThirdIndex = ({}: ThirdBottomStackProps<AllscreenList.ThirdIndex>) => {
  return (
    <Container>
      <CustomText>ThirdBottom</CustomText>
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

export default ThirdIndex;
