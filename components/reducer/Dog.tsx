import React, {useEffect, useReducer, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {ActionType, reducer} from './reducer';

const initalState = {
  data: 'https://i.hizliresim.com/iwt6z0i.gif',
  loading: false,
};

export const Dog = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const fetchDogApi = async () => {
    dispatch({type: ActionType.FETCH_START});

    await fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(response =>
        dispatch({type: ActionType.FETCH_SUCCESS, data: response.message}),
      );
  };

  return (
    <View style={styles.main}>
      {state.loading ? (
        <Text>LOADING</Text>
      ) : (
        <View>
          <Button title="Get Dog Image" onPress={fetchDogApi}></Button>
          <Image style={{width: 200, height: 300}} source={{uri: state.data}} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
