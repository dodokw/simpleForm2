import {Dimensions} from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

// XD파일 스크린의 세로,가로(임시)
export const basicDimensions = {
  height: 812,
  width: 375,
};

// 디바이스의 세로,가로 비율
const {height, width} = Dimensions.get('window');

/**
 *
 * @param num 디바이스의 세로 비율에 따라 변환되는 값
 * @returns
 */
export const hp = (num: number) => {
  return num * Number((height * (1 / basicDimensions.height)).toFixed(2));
}; // 높이 변환 작업

/**
 *
 * @param num 디바이스의 세로 비율에 따라 변환되는 값
 * @returns
 */
export const wp = (num: number) => {
  return num * Number((width * (1 / basicDimensions.width)).toFixed(2));
}; // 가로 변환 작업