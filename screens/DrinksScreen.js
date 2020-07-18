import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DrinksScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>I&apos;m in the DrinksScreen component!</Text>
      <Button
        title="Go to Filters Screen"
        onPress={() => navigation.navigate('Filters')}
      />
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

export default DrinksScreen;
