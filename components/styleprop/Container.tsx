import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

type TContainer = {
  viewStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
};

export const Container = (props: TContainer) => {
  return (
    <View style={props.viewStyle}>
    <Text style={props.textStyle}>trying props rn ts</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
