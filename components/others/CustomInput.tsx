import React from 'react';
import {TextInput, View} from 'react-native';

type TCustomInput = {
  value: string;
  onChangeText: (value: string) => void;
};

export const CustomInput = ({value, onChangeText}: TCustomInput) => {
  return (
    <View>
      <TextInput value={value} onChangeText={onChangeText} />
    </View>
  );
};
