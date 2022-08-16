import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TPersonList} from '../../src/Home';

type TListProps<Object> = {
  items: Object[]; // gelen items dizisi türetilen Obje türünde bir dizi olacak diye tanımladık
  onClick: (value: Object) => void; // metodun seçili Obje için çalışmasını sağladık
};

export const List = <Object extends TPersonList>({ // TPersonList'ten örnek bir obje türettik
  items,
  onClick,
}: TListProps<Object>) => { // gelecek verilerin yukarıda türettiğimiz obje türünde olacağını belirttik
  return (
    <View>
      {items.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => onClick(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
