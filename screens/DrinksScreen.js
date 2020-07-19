import React, { useEffect } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Item from '../components/Item';
import Error from '../components/Error';
import { getResourceItem } from '../services/cocktaildbServices';

const DrinksScreen = ({ navigation, drinks, getResourceItem }) => {
  useEffect(() => {
    getResourceItem('filter', 'c', 'Ordinary Drink');
  }, [drinks]);

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  const content = drinks ? (
    <FlatList
      data={drinks}
      keyExtractor={(item) => item.idDrink}
      renderItem={renderItem}
    />
  ) : (
    <Error />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Drinks"
        type="filter"
        onPress={() => navigation.navigate('Filters')}
      />
      {content}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResourceItem: (param, key, value) =>
      dispatch(getResourceItem(param, key, value)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);
