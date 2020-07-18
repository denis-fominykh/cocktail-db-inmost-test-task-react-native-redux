import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const DrinksScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>I&apos;m in the DrinksScreen component!</Text>
      <Button
        title="Go to Filters Screen"
        onPress={() => navigation.navigate('Filters')}
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

export default DrinksScreen;
