import React, {useReducer} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ButtonType, counterReducer} from './counter_reducer';

const initialState = {
  count: 80,
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState); // reducer yapısını ve initial durumu tanımladık

  return (
    <View style={styles.main}>
      <Text>{state.count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="ARTTIR"
          onPress={() => dispatch({type: ButtonType.INCREASE, payload: 50})}
        />
        <Button
          title="AZALT"
          onPress={() => dispatch({type: ButtonType.DECREASE, payload: 25})}
        />
        <Button
          title="RESET"
          onPress={() => dispatch({type: ButtonType.RESET})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
