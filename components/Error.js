import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Error = () => {
  return (
    <View style={styles.errorContainer}>
      <Text style={{ ...styles.errorText, fontSize: 34 }}>Error!</Text>
      <Text style={{ ...styles.errorText, fontSize: 24 }}>
        Something went wrong.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#f1556b',
  },
});

export default Error;
