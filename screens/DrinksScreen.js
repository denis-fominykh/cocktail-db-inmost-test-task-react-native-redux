import React, { useEffect } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Item from '../components/Item';
import {
  getItemsCategories,
  getResourceItem,
} from '../services/cocktaildbServices';

const DrinksScreen = ({
  navigation,
  drinks,
  categories,
  getItemsCategories,
  getResourceItem,
}) => {
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  useEffect(() => {
    getResourceItem('filter', 'c', 'Ordinary Drink');
  }, [drinks]);

  const content = drinks ? (
    <FlatList
      data={drinks}
      keyExtractor={(item) => item.idDrink}
      renderItem={renderItem}
    />
  ) : (
    <Text>Something went wrong!</Text>
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
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsCategories: (param, key, value) =>
      dispatch(getItemsCategories(param, key, value)),
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
