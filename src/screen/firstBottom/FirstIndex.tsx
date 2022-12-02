import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  AllscreenList,
  FirstBottomStackProps,
} from '../../navigation/NavigationProps';
import {CustomText} from '../../tools/CustomText';

const FirstIndex = ({}: FirstBottomStackProps<AllscreenList.FirstIndex>) => {
  return (
    <Container>
      <CustomText>fistBottom</CustomText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default FirstIndex;
