import React from 'react';
import {Text, View} from 'react-native';

type TNumberType = {
  value: number;
};

type TPositive = TNumberType & {
  isPositive: boolean;
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

type TNumberProps = TPositive | TNegative | TZero;

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
