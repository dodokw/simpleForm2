import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FourthIndex from '../screen/fourthBottom/FourthIndex';
import {AllscreenList, FourthBottomParamList} from './NavigationProps';

const FourthNavigation = () => {
  const Stack = createStackNavigator<FourthBottomParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllscreenList.FourthIndex}
        component={FourthIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FourthNavigation;
