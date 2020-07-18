import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const FiltersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>I&apos;m in the FiltersScreen component!</Text>
      <Button
        title="Go to Drinks Screen"
        onPress={() => navigation.navigate('Drinks')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FiltersScreen;
