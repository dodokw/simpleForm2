import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstIndex from '../screen/firstBottom/FirstIndex';
import {AllscreenList, FirstBottomParamList} from './NavigationProps';

const FirstNavigation = () => {
  const Stack = createStackNavigator<FirstBottomParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllscreenList.FirstIndex}
        component={FirstIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FirstNavigation;
