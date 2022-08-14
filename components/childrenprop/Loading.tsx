import {StyleSheet, Text, View} from 'react-native';
import React, {FunctionComponent} from 'react';

interface ILoadingProps {
  children: any;
  loading: boolean;
}

export const Loading: FunctionComponent<ILoadingProps> = props => {
  const {loading} = props;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>...LOADING...</Text>
      </View>
    );
  }

  return <View>{props.children}</View>;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
