import React, { useEffect } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Second = () => {
  const list = useSelector((item: any) => item.nameList);

  useEffect(() => {
    console.log(list);
    
  
  }, [])
  

  return (
    <View style={styles.second}>
      <Text style={styles.text}>Second</Text>
      <FlatList
        data={list}
        renderItem={(item: any) => <Text style={styles.text}>{item}</Text>}
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
