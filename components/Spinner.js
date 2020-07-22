import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Spinner;
