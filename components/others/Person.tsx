import React from 'react';
import {Text, View} from 'react-native';

type TPerson = {
  firstName: string;
  lastName: string;
  age?: number;
};

export const Person = (props: TPerson) => {
  return (
    <View>
      <Text>
        {props.firstName} {props.lastName} ({props.age})
      </Text> 
    </View>
  );
};
