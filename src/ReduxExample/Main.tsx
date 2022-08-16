import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

const initialState = {
  counter: 0,
};

function myReducer(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
}

const Main = () => {
  return (
    <Provider store={createStore(myReducer, initialState)}>
      <View style={styles.view}>
        <First />
        <Second />
      </View>
    </Provider>
  );
};

const First = () => {
  const counter = useSelector((selector: any) => selector.counter);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch({type: 'UPDATE_COUNTER'});
  };

  return (
    <View style={styles.first}>
      <Text style={styles.text}>First {counter}</Text>
      <TouchableOpacity onPress={handleUpdate}>
        <Text>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

const Second = () => {
  const counter = useSelector((selector: any) => selector.counter);

  return (
    <View style={styles.second}>
      <Text style={styles.text}>Second {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  first: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  second: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  text: {
    fontSize: 32,
  },
});

export default Main;
