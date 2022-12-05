import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import styled from 'styled-components/native';
import {
  AllscreenList,
  FirstBottomStackProps,
} from '../../navigation/NavigationProps';
import {useAndroidBackHandler} from '../../tools/AndroidBackhandler';
import {Color} from '../../tools/Color';
import {CustomText} from '../../tools/CustomText';
import {OpenEyeIcon} from '../../tools/Svg';
import {hp, wp} from '../../tools/UI';

const FirstIndex = ({}: FirstBottomStackProps<AllscreenList.FirstIndex>) => {
  const [exitApp, setExitApp] = React.useState(false);

  useEffect(() => {
    const backAction = () => {
      let timeOut;
      if (exitApp) {
        clearTimeout(timeOut);
        BackHandler.exitApp();
      } else {
        setExitApp(true);
        ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
        timeOut = setTimeout(() => {
          setExitApp(false);
        }, 2000);
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [exitApp]);

  return (
    <Container>
      <CustomText fontName="NanumSquareB">fistBottom</CustomText>
      <OpenEyeIcon width={wp(80)} height={hp(80)} color={Color.green} />
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
