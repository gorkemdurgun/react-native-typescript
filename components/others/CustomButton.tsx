import {Button} from 'react-native';
import React from 'react';

type TButton = {
  title: string;
  handleClick: () => void;
};

export const CustomButton = (props: TButton) => {
  return <Button title={props.title} onPress={props.handleClick}></Button>;
};
