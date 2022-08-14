import {Text, View} from 'react-native';
import React from 'react';

type TGetStart = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function GetStart(props: TGetStart) {
  const {messageCount = 0} = props;
  return (
    <View>
      {props.isLoggedIn ? (
        <Text>
          Hi {props.name},{'\n'}You have {messageCount} messages !
        </Text>
      ) : (
        <Text> NOT LOGGED IN :( </Text>
      )}
    </View>
  );
}
