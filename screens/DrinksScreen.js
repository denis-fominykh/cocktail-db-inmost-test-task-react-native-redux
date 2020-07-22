import React, { useEffect } from 'react';
import { StyleSheet, SectionList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Item from '../components/Item';
import Spinner from '../components/Spinner';
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
  useEffect(() => {
    getItemsCategories('list', 'c', 'list');
  }, []);

  useEffect(() => {
    if (categories) {
      categories.forEach((item) => {
        if (item.checked) {
          getResourceItem('filter', 'c', item.name);
        }
      });
    }
  }, [categories]);

  const content = drinks ? (
    <SectionList
      sections={drinks}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, section: { checked } }) => (
        <Item item={item} checked={checked} />
      )}
      renderSectionHeader={({ section: { title, checked } }) => {
        return checked ? (
          <Text style={styles.categoryTitle}>{title}</Text>
        ) : null;
      }}
    />
  ) : (
    <Spinner />
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
    getResourceItem: (param, key, value) =>
      dispatch(getResourceItem(param, key, value)),
    getItemsCategories: (param, key, value) =>
      dispatch(getItemsCategories(param, key, value)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryTitle: {
    fontSize: 14,
    color: '#7E7E7E',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingTop: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);
