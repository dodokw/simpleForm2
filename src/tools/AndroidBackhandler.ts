import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

/**
 *
 * @param callback 뒤로가기 버튼을 눌렀을 때 실행될 함수(안드로이드 전용)
 */
export const useAndroidBackHandler = (callback: () => void) => {
  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        callback();
        return true;
      },
    );
    return () => backHandler.remove();
  });
};
