import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';

const DrinksScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Drinks"
        type="filter"
        onPress={() => navigation.navigate('Filters')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default DrinksScreen;
