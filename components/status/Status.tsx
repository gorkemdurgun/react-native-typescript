import React from 'react';
import {Text, View} from 'react-native';

type TStatusProps = {
  status: 'loading' | 'complete' | 'error';
};

export const Status = ({status}: TStatusProps) => {
  let message;
  if (status === 'loading') {
    message = 'Loading...';
  } else if (status === 'complete') {
    message = 'Complete';
  } else if (status === 'error') {
    message = 'Error !';
  }
  return (
    <View>
      <Text>Status - {message}</Text>
    </View>
  );
};
