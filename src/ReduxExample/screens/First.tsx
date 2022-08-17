import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackParamList} from '../ReduxApp';

const First = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const handleAdd = () => {
    dispatch({type: 'ADD_NAME', payload: {name: text}});
  };

  return (
    <View style={styles.first}>
      <TextInput value={text} onChangeText={setText} />
      <TouchableOpacity onPress={handleAdd}>
        <Text>add to list</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Second')}>
        <Text>go 2nd</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  text: {
    fontSize: 32,
  },
});

export default First;
