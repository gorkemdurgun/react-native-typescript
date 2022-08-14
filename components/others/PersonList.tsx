import React from 'react';
import {Text, View} from 'react-native';

type TPersonList = {
  persons: {
    name: string;
    surname: string;
  }[];
};

export const PersonList = (props: TPersonList) => {
  return (
    <View>
      {props.persons.map((person, index) => {
        return (
          <Text key={index}>
            {person.name} {person.surname}
          </Text>
        );
      })}
    </View>
  );
};
