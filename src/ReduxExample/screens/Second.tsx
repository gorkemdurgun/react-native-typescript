import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

const Second = () => {
  const list = useSelector((state: any) => state.nameList, shallowEqual);

  useEffect(() => {
    console.log('list' + list);
  }, []);

  return (
    <View style={styles.second}>
      <Text style={styles.text}>Second</Text>
      <FlatList
        data={list}
        renderItem={(item: any) => {
          return <Text> {item.item} </Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  second: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  text: {
    fontSize: 32,
  },
});

export default Second;
