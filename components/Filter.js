import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import IconF from 'react-native-vector-icons/dist/Feather';
import IconE from 'react-native-vector-icons/dist/EvilIcons';

const Filter = ({ category, checked, setCategory }) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setCategory({
      name: category.name,
      id: category.id,
      checked: isChecked,
    });
  }, [isChecked]);

  return (
    <View style={styles.checkboxContainer}>
      <Text style={styles.text}>{category.name}</Text>
      <CheckBox
        iconRight
        checked={isChecked}
        checkedIcon={<IconF name="check" size={35} color="black" />}
        uncheckedIcon={<IconE name="close" size={35} color="white" />}
        onPress={() => setIsChecked((value) => !value)}
        containerStyle={styles.checkbox}
      />
    </View>
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
