import React, { useState, useEffect } from 'react';
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
import { setCategories } from '../redux/actions';
import { getResourceItem } from '../services/cocktaildbServices';

const FiltersScreen = ({
  navigation,
  categories,
  setItemCategories,
  getResourceItem,
}) => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (!isLoaded) {
      categories.forEach((item) => {
        if (item.checked) {
          getResourceItem('filter', 'c', item.name);
        }
      });
    }
    setIsLoaded(true);
  }, [isLoaded]);

  const button = (
    <TouchableOpacity
      onPress={() => {
        setIsLoaded(false);
        navigation.goBack();
      }}
      style={styles.buttonContainer}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>APPLY</Text>
      </View>
    </TouchableOpacity>
  );

  const content = categories ? (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Filter
          category={item}
          checked={item.checked}
          setCategory={setItemCategories}
        />
      )}
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
    setItemCategories: (value) => dispatch(setCategories(value)),
    getResourceItem: (param, key, value) =>
      dispatch(getResourceItem(param, key, value)),
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
