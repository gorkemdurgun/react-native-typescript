import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TFirstPosition = 'baseline' | 'center' | 'flex';
type TSecondPosition = 'end' | 'start';

type TToastProps = {
  position:
    | Exclude< // exclude ederek center-end gibi yanlış pozisyonların girilmesini engelledik
        `${TFirstPosition}-${TSecondPosition}`,
        'center-end' | 'center-start' | 'baseline-start' | 'baseline-end'
      >
    | 'center' // center-end veya venter-start gibi yanlış opsiyonlar için yalnızca center gösterilsin dedik
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
