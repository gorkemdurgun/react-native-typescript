import React, {Component, ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

type TCounterProps = {
  title: string;
};

type TCounterState = {
  count: number;
};

export class CounterClass extends Component<TCounterProps, TCounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <TouchableOpacity onPress={this.handleClick}>
          <Text>{this.state.count}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
