import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { MenuItem } from '../screens/types';
import MenuItemCard from './MenuItemCard';

const HomeScreen = ({ navigation }: any) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const getTotalItems = () => menuItems.length;

  const getAveragePrice = (course: string) => {
    const filteredItems = menuItems.filter(item => item.course === course);
    const totalPrice = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return filteredItems.length > 0 ? totalPrice / filteredItems.length : 0;
  };

  return (
    <View>
      <Text>Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItemCard menuItem={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text>Total menu items: {getTotalItems()}</Text>
      <Text>Average Starter Price: {getAveragePrice('Starter')}</Text>
      <Text>Average Main Price: {getAveragePrice('Main')}</Text>
      <Text>Average Dessert Price: {getAveragePrice('Dessert')}</Text>

      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem', { setMenuItems })} />
      <Button title="Filter by Course" onPress={() => navigation.navigate('FilterMenuByCourse', { menuItems })} />
    </View>
  );
};

export default HomeScreen;
