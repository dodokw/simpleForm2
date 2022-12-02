/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  LogBox,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import BottomNavigation from './src/navigation/BottomNavigation';

const App = () => {
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

  LogBox.ignoreLogs(['Expected style']);

  return (
    <SafeAreaView style={{flex: 1}}>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default App;
