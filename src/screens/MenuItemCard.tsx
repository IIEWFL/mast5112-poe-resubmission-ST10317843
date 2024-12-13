import React from 'react';
import { View, Text } from 'react-native';
import { MenuItem } from '../screens/types';

const MenuItemCard = ({ menuItem }: { menuItem: MenuItem }) => {
  return (
    <View>
      <Text>{menuItem.name}</Text>
      <Text>{menuItem.description}</Text>
      <Text>Course: {menuItem.course}</Text>
      <Text>Price: ${menuItem.price}</Text>
    </View>
  );
};

export default MenuItemCard;
