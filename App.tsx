import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../SeaboxApp/src/screens/HomeScreen'
import AddMenuItemScreen from './src/screens/AddMenuItems';
import FilterMenuByCourseScreen from './src/screens/FilterMenuByCourseScreen';
import MenuItemCard from './src/screens/MenuItemCard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        <Stack.Screen name="FilterMenuByCourse" component={FilterMenuByCourseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
