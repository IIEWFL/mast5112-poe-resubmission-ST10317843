import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { MenuItem } from '../screens/types';
import MenuItemCard from '../screens/MenuItemCard';

const FilterMenuByCourseScreen = ({ route }: any) => {
  const { menuItems } = route.params;
  const [selectedCourse, setSelectedCourse] = React.useState('Starter');

  const filteredMenuItems = menuItems.filter((item: { course: string; }) => item.course === selectedCourse);

  return (
    <View>
      <Text>Select Course</Text>
      <Button title="Starter" onPress={() => setSelectedCourse('Starter')} />
      <Button title="Main" onPress={() => setSelectedCourse('Main')} />
      <Button title="Dessert" onPress={() => setSelectedCourse('Dessert')} />
      
      <FlatList
        data={filteredMenuItems}
        renderItem={({ item }) => <MenuItemCard menuItem={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FilterMenuByCourseScreen;
