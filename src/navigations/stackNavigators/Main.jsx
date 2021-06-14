import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {MAIN_STACK} from '../../constants/routeNames';
import Categories from '../../pages/Categories';
import Feedback from '../../pages/Feeback';
import Questions from '../../pages/Questions';

const Stack = createStackNavigator();

const Main = () => {
  const {selectedCategory} = useSelector(state => state.questions);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#2f3d56'},
        headerTitleStyle: {color: '#FFF'},
      }}>
      <Stack.Screen
        name={MAIN_STACK.CATEGORIES}
        component={Categories}
        options={{title: 'Dev Mobile'}}
      />
      <Stack.Screen
        name={MAIN_STACK.QUESTIONS}
        component={Questions}
        options={{
          title: selectedCategory ? selectedCategory.name : null,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={MAIN_STACK.FEEDBACK}
        component={Feedback}
        options={{
          title: 'Feedback',
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
