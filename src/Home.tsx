import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GetStart from '../components/others/GetStart';
import {Person} from '../components/others/Person';
import {PersonList} from '../components/others/PersonList';
import {CustomButton} from '../components/others/CustomButton';
import {Container} from '../components/styleprop/Container';
import {CustomInput} from '.././components/others/CustomInput';
import {User} from '../components/usestate/User';
import {ThemeContextProvider} from '../context/ThemeContext';
import {Box} from '../context/Box';
import {DomRef} from '../components/refs/DomRef';
import {CounterClass} from '../components/counter/CounterClass';
import {Private} from '../components/auth/Private';
import {Profile} from '../components/auth/Profile';
import {List} from '../components/generics/List';
import {Number} from '../components/restriction/Number';
import {Status} from '../components/status/Status';
import {Toast} from '../components/exclude/Toast';
import Country from './CountryApp/Country';
import CountryApp from './CountryApp/CountryApp';

export type TPersonList = {
  name: string;
  surname: string;
  age: number;
};

export default function Home() {
  const [value, setValue] = useState('');

  const myPerson = {
    firstName: 'Görkem',
    lastName: 'Durgun',
    age: 23,
  };

  const personList = [
    {
      name: 'Görkem',
      surname: 'Durgun',
      age: 23,
    },
    {
      name: 'Ceyhun',
      surname: 'Boran',
      age: 21,
    },
    {
      name: 'Doğukan',
      surname: 'Çıtak',
      age: 21,
    },
  ];

  return <List items={personList} onClick={item => console.log(item)} />;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
