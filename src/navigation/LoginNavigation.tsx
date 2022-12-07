import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AllscreenList, LoginParamList} from './NavigationProps';
import Login from '../screen/login/Login';

const LoginNavigation = () => {
  const Stack = createStackNavigator<LoginParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={AllscreenList.Login}
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigation;
