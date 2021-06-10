import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MAIN_STACK} from '../constants/routeNames';
import Main from './stackNavigators/Main';

const Stack = createStackNavigator();

const TestSas = () => {
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={MAIN_STACK.CATEGORIES} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TestSas;
