import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstNavigation from './FirstNavigation';
import SecondNavigation from './SecondNavigation';
import ThirdNavigation from './ThirdNavigation';
import FourthNavigation from './FourthNavigation';
import {NavigationContainer} from '@react-navigation/native';

const BottomNavigation = () => {
  const BottomStack = createBottomTabNavigator<any>();

  return (
    <NavigationContainer>
      <BottomStack.Navigator>
        <BottomStack.Screen
          name="First"
          component={FirstNavigation}
          options={{headerShown: false}}
        />
        <BottomStack.Screen
          name="Second"
          component={SecondNavigation}
          options={{headerShown: false}}
        />
        <BottomStack.Screen
          name="Third"
          component={ThirdNavigation}
          options={{headerShown: false}}
        />
        <BottomStack.Screen
          name="Fourth"
          component={FourthNavigation}
          options={{headerShown: false}}
        />
      </BottomStack.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
