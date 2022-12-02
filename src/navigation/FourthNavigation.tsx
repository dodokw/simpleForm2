import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FourthIndex from '../screen/fourthBottom/FourthIndex';

const FourthNavigation = () => {
  const Stack = createStackNavigator<any>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FourthIndex"
        component={FourthIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FourthNavigation;
