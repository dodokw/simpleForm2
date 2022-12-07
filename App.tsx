/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {configureStore} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, TextInput, LogBox, View} from 'react-native';
import {Provider} from 'react-redux';
import RootReducer from './src/module';
import BottomNavigation from './src/navigation/BottomNavigation';
import Route from './src/screen/Route';
import {useAndroidBackHandler} from './src/tools/AndroidBackhandler';

const App = () => {
  //store 생성
  const store = configureStore({
    reducer: RootReducer,
    middleware: [],
  });
  //store 생성 끝

  //텍스트 고정 시작
  interface TextWithDefaultProps extends Text {
    defaultProps?: {allowFontScaling?: boolean};
  }

  interface TextInputWithDefaultProps extends TextInput {
    defaultProps?: {allowFontScaling?: boolean};
  }

  (Text as unknown as TextWithDefaultProps).defaultProps =
    (Text as unknown as TextWithDefaultProps).defaultProps || {};
  (Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
    false;
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps =
    (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
  (
    TextInput as unknown as TextInputWithDefaultProps
  ).defaultProps!.allowFontScaling = false;
  //텍스트 고정 끝

  //백핸들러컨트롤 시작
  // const backHandler = useAndroidBackHandler();
  // backHandler.addPressBackListener(() => {
  //   console.log('뒤로가기버튼이 눌렸습니다.');
  // });
  //백핸들러컨트롤 끝

  LogBox.ignoreLogs(['Expected style']);

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Route />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
