import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';

import {MAIN_STACK} from '../constants/routeNames';
import {asyncSetCategories} from '../store/ducks/questions';
import Main from './stackNavigators/Main';

const Stack = createStackNavigator();

const TestSas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSetCategories());
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
