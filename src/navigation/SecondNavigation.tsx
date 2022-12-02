import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SecondIndex from '../screen/secondBottom/SecondIndex';
import {
  AllscreenList,
  SecondBottomParamList,
  SecondBottomStackProps,
} from './NavigationProps';

const SecondNavgation = () => {
  const Stack = createStackNavigator<SecondBottomParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllscreenList.SecondIndex}
        component={SecondIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SecondNavgation;
