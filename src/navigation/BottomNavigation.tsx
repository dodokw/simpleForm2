import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstNavigation from './FirstNavigation';
import SecondNavigation from './SecondNavigation';
import ThirdNavigation from './ThirdNavigation';
import FourthNavigation from './FourthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {
  AllscreenList,
  BottomTabNameList,
  RootStackParamList,
} from './NavigationProps';

const BottomNavigation = () => {
  const BottomStack = createBottomTabNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <BottomStack.Navigator>
        <BottomStack.Screen
          name={BottomTabNameList.first}
          component={FirstNavigation}
          options={{headerShown: false}}
        />
        <BottomStack.Screen
          name={BottomTabNameList.second}
          component={SecondNavigation}
          options={{headerShown: false}}
        />
        <BottomStack.Screen
          name={BottomTabNameList.third}
          component={ThirdNavigation}
          options={{headerShown: false}}
        />
        <BottomStack.Screen
          name={BottomTabNameList.fourth}
          component={FourthNavigation}
          options={{headerShown: false}}
        />
      </BottomStack.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
