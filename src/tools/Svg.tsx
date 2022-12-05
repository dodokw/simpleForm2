import React from 'react';
import {View} from 'react-native';
import OpenEye from '../assets/image/svg/OpenEye.svg';
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
      color={Color.green}
      style={IconProps.style}
    />
  );
};
