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
  font-family: ${props => props.fontName || 'Roboto'};
`;
