import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Item = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    paddingHorizontal: '5%',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  itemText: {
    fontSize: 16,
    paddingLeft: 21,
  },
});

export default Item;
