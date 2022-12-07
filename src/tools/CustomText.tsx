import React, {FC} from 'react';
import styled from 'styled-components/native';

//폰트이름정리
export enum CustomTextType {
  H1 = 'H1',
}

//폰트타입
type CustomTextProps = {
  fontName?: string;
  color?: string;
  size?: number;
};

/**
 * @param fontName 폰트이름
 * @param color 색상
 * @param size 사이즈
 * @description 폰트커스텀
 */
export const CustomText = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: ${props => props.fontName || 'Georgia'};
`;

//Pretendard-Bold, Pretendard-ExtraBold, Pretendard-ExtraLight, Pretendard-Light, Pretendard-Medium, Pretendard-Regular, Pretendard-SemiBold, Pretendard-Thin
export const PretendardBold = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: 'Pretendard-Bold';
`;

export const PretendardExtraBold = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: 'Pretendard-ExtraBold';
`;

export const PretendardExtraLight = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: 'Pretendard-ExtraLight';
`;

export const PretendardLight = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: 'Pretendard-Light';
`;

export const PretendardMedium = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: 'Pretendard-Medium';
`;

export const PretendardRegular = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: 'Pretendard-Regular';
`;

export const PretendardSemiBold = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: 'Pretendard-SemiBold';
`;

export const PretendardThin = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || 20}px;
  color: ${props => props.color || '#000'};
  font-family: 'Pretendard-Thin';
`;
