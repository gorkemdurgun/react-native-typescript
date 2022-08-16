import React from 'react';
import {Text, View} from 'react-native';

type TNumberType = {
  value: number; 
  // gelen value pozitif, negatif ya da 0 da olsa number olacağı için her numberda olacak olan value'yi tanımladık
};

type TPositive = TNumberType & {
  isPositive: boolean; // eğer pozitifse diğer tipleri never, pozitifi boolean yaptık
  isNegative?: never;
  isZero?: never;
};

type TNegative = TNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type TZero = TNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type TNumberProps = TPositive | TNegative | TZero; // gelen propların olabiceği tipleri sınırlandırdık

export const Number = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: TNumberProps) => {
  return (
    <View>
      <Text>
        {value}
        {isNegative && 'isNegative'}
        {isPositive && 'isPositive'}
        {isZero && 'isZero'}
      </Text>
    </View>
  );
};
