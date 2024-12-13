import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { MenuItem } from '../screens/types';

const AddMenuItemScreen = ({ route, navigation }: any) => {
  const { setMenuItems } = route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starter');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    const newItem: MenuItem = {
      id: Math.random(),
      name,
      description,
      course,
      price: parseFloat(price),
    };
    setMenuItems((prevItems: MenuItem[]) => [...prevItems, newItem]);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Dish Name</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Description</Text>
      <TextInput value={description} onChangeText={setDescription} />
      <Text>Course</Text>
      <TextInput value={course} onChangeText={setCourse} />
      <Text>Price</Text>
      <TextInput value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Button title="Add Menu Item" onPress={handleAddItem} />
    </View>
  );
};

export default AddMenuItemScreen;
