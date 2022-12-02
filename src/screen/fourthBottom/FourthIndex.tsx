import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  AllscreenList,
  FourthBottomStackProps,
} from '../../navigation/NavigationProps';
import {CustomText} from '../../tools/CustomText';

const FourthIndex = ({}: FourthBottomStackProps<AllscreenList.FourthIndex>) => {
  return (
    <Container>
      <CustomText>FourthBottom</CustomText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default FourthIndex;
