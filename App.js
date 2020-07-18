import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrinksScreen from './screens/DrinksScreen';
import FiltersScreen from './screens/FiltersScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drinks">
        <Stack.Screen name="Drinks" component={DrinksScreen} />
        <Stack.Screen name="Filters" component={FiltersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
