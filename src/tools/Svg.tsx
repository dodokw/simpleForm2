import React from 'react';
import {View} from 'react-native';
import OpenEye from '../assets/image/svg/OpenEye.svg';
import IconApple from '../assets/image/svg/icon_apple.svg';
import IconKakao from '../assets/image/svg/icon_kakao.svg';
import IconNaver from '../assets/image/svg/icon_naver.svg';
import Logo from '../assets/image/svg/logo.svg';

import {Color} from './Color';

type IconProps = {
  width: number;
  height: number;
  color?: string | undefined;
  style?: React.CSSProperties | any | undefined;
};

export const OpenEyeIcon = (IconProps: IconProps) => {
  return (
    <OpenEye
      width={IconProps.width}
      height={IconProps.height}
      color={IconProps.color || Color.black}
      style={IconProps.style}
    />
  );
};

export const IconAppleIcon = (IconProps: IconProps) => {
  return (
    <IconApple
      width={IconProps.width}
      height={IconProps.height}
      color={IconProps.color || Color.black}
      style={IconProps.style}
    />
  );
};

export const IconKakaoIcon = (IconProps: IconProps) => {
  return (
    <IconKakao
      width={IconProps.width}
      height={IconProps.height}
      color={IconProps.color || Color.black}
      style={IconProps.style}
    />
  );
};

export const IconNaverIcon = (IconProps: IconProps) => {
  return (
    <IconNaver
      width={IconProps.width}
      height={IconProps.height}
      color={IconProps.color || Color.black}
      style={IconProps.style}
    />
  );
};

export const LogoIcon = (IconProps: IconProps) => {
  return (
    <Logo
      width={IconProps.width}
      height={IconProps.height}
      color={IconProps.color || Color.black}
      style={IconProps.style}
    />
  );
};
