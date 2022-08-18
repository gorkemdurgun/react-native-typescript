import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './screens/First';
import Second from './screens/Second';
import UserProvider from './provider/UserProvider';

export type StackParamList = {
  Main: undefined;
  First: undefined;
  Second: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const ReduxApp = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='First'>
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Second" component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default ReduxApp;
