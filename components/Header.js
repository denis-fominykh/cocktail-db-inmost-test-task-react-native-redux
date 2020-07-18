import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import IconFA from 'react-native-vector-icons/dist/FontAwesome';
import IconAD from 'react-native-vector-icons/dist/AntDesign';

const Header = ({ title, type, onPress }) => {
  if (type === 'filter') {
    return (
      <View style={styles.headerWrapper}>
        <View style={{ ...styles.headerContainer, ...styles.headerDrinks }}>
          <Text style={{ ...styles.titleText, paddingLeft: 30 }}>{title}</Text>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{ paddingRight: 20 }}
          >
            <IconFA name="filter" size={35} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (type === 'goBack') {
    return (
      <View style={styles.headerWrapper}>
        <View style={{ ...styles.headerContainer, ...styles.headerFilters }}>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{ paddingLeft: 20 }}
          >
            <IconAD name="arrowleft" size={35} />
          </TouchableOpacity>
          <Text style={{ ...styles.titleText, paddingLeft: 40 }}>{title}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapper: {
    overflow: 'hidden',
    paddingBottom: 5,
  },
  headerContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: '#fff',
  },
  headerDrinks: {
    justifyContent: 'space-between',
  },
  headerFilters: {},
  titleText: {
    fontSize: 24,
  },
});

export default Header;
