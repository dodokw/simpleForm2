import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ThirdIndex from '../screen/thirdBottom/ThirdIndex';
import {AllscreenList, ThirdBottomParamList} from './NavigationProps';

const ThirdNavigation = () => {
  const Stack = createStackNavigator<ThirdBottomParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllscreenList.ThirdIndex}
        component={ThirdIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ThirdNavigation;
