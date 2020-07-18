import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FiltersScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>I&apos;m in the FiltersScreen component!</Text>
      <Button title="Go to Drinks Screen" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default FiltersScreen;
