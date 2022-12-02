import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstIndex from '../screen/firstBottom/FirstIndex';

const FirstNavigation = () => {
  const Stack = createStackNavigator<any>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstIndex"
        component={FirstIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FirstNavigation;
