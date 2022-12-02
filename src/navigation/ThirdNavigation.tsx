import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThirdIndex from '../screen/thirdBottom/ThirdIndex';

const ThirdNavigation = () => {
  const Stack = createStackNavigator<any>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ThirdIndex"
        component={ThirdIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ThirdNavigation;
