import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  AllscreenList,
  FirstBottomStackProps,
} from '../../navigation/NavigationProps';
import {Color} from '../../tools/Color';
import {CustomText} from '../../tools/CustomText';
import {OpenEyeIcon} from '../../tools/Svg';

const FirstIndex = ({}: FirstBottomStackProps<AllscreenList.FirstIndex>) => {
  return (
    <Container>
      <CustomText>fistBottom</CustomText>
      <OpenEyeIcon width={100} height={100} fill={Color.black} />
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
