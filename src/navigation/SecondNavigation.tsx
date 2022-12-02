import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SecondIndex from '../screen/secondBottom/SecondIndex';

const SecondNavgation = () => {
  const Stack = createStackNavigator<any>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SecondIndex"
        component={SecondIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SecondNavgation;
