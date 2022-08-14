import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TFirstPosition = 'baseline' | 'center' | 'flex';
type TSecondPosition = 'end' | 'start';

type TToastProps = {
  position:
    | Exclude<
        `${TFirstPosition}-${TSecondPosition}`,
        'center-end' | 'center-start' | 'baseline-start' | 'baseline-end'
      >
    | 'center'
    | 'baseline';
};

export const Toast = ({position}: TToastProps) => {
  return (
    <View style={{alignItems: position}}>
      <Text>
        Toast Notification - {position}
      </Text>
    </View>
  );
};
