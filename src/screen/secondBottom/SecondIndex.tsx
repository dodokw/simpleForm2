import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  AllscreenList,
  SecondBottomStackProps,
} from '../../navigation/NavigationProps';
import {CustomText} from '../../tools/CustomText';

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

export default SecondIndex;
