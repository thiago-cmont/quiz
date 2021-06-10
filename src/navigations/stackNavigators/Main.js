import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {MAIN_STACK} from '../../constants/routeNames';
import Categories from '../../pages/Categories';
import Questions from '../../pages/Questions';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MAIN_STACK.CATEGORIES} component={Categories} />
      <Stack.Screen name={MAIN_STACK.QUESTIONS} component={Questions} />
    </Stack.Navigator>
  );
};

export default Main;
