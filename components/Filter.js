import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import IconF from 'react-native-vector-icons/dist/Feather';

const Filter = ({ category }) => {
  const [checked, setChecked] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => setChecked((value) => !value)}
      style={styles.checkboxContainer}
    >
      <Text style={styles.text}>{category.strCategory}</Text>
      <CheckBox
        iconRight
        checked={checked}
        checkedIcon={<IconF name="check" size={35} />}
        uncheckedIcon=""
        onPress={() => setChecked((value) => !value)}
        containerStyle={styles.checkbox}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    width: '100%',
    paddingHorizontal: 35,
  },
  text: {
    color: '#7E7E7E',
    fontSize: 16,
  },
  checkbox: {
    backgroundColor: '#fff',
    padding: 0,
  },
});

export default Filter;
