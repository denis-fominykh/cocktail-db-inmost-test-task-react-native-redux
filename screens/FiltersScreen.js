import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Filter from '../components/Filter';
import Error from '../components/Error';
import { getItemsCategories } from '../services/cocktaildbServices';
import { setCategories } from '../redux/actions';

const FiltersScreen = ({
  navigation,
  categories,
  getItemsCategories,
  setItemsCategories,
}) => {
  useEffect(() => {
    getItemsCategories('list', 'c', 'list');
  }, [categories]);

  const renderItem = ({ item }) => {
    return (
      <Filter
        category={item}
        checked={item.checked}
        setCategory={setItemsCategories}
      />
    );
  };

  const button = (
    <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>APPLY</Text>
      </View>
    </TouchableOpacity>
  );

  const content = categories ? (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListFooterComponent={button}
    />
  ) : (
    <Error />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Filters"
        type="goBack"
        onPress={() => navigation.goBack()}
      />
      {content}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsCategories: (param, key, value) =>
      dispatch(getItemsCategories(param, key, value)),
    setItemsCategories: (value) => dispatch(setCategories(value)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '87%',
    height: 53,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
