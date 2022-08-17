import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import First from './First';
import Second from './Second';

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
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default Main;
