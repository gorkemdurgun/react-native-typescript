import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { TPersonList } from '../../src/Home';

type TListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends TPersonList>({
  items,
  onClick,
}: TListProps<T>) => {
  return (
    <View>
      {items.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => onClick(item)}>
            <Text>{item.age}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
