import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {AllscreenList, LoginStackProps} from '../../navigation/NavigationProps';
import {PretendardMedium} from '../../tools/CustomText';
import {LogoIcon} from '../../tools/Svg';
import {hp, wp} from '../../tools/UI';

const Login = ({}: LoginStackProps<AllscreenList.Login>) => {
  return (
    <Container>
      <MarginContainer>
        <PretendardMedium>나에게 맞춘</PretendardMedium>
        <PretendardMedium>스마트한 차량 비교 서비스</PretendardMedium>
        <LogoIcon width={98} height={22} style={{marginTop: 16}} />
      </MarginContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const MarginContainer = styled.View`
  margin-top: ${hp(100)}px;
  margin-left: ${wp(20)}px;
  margin-right: ${wp(20)}px;
`;

export default Login;
