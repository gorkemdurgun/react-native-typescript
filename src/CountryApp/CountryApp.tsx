import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Country from './Country';
import {Loading} from '../../components/childrenprop/Loading';
import {CountryType} from './Types/country_types';

const CountryApp = () => {
  const [countries, setCountries] = useState<CountryType[]>([]); 
  // countries CountryType dizisi olmalı diye tanımladık ve başlangıç değeri için boş bir dizi tanımladık
  const [isLoading, setIsLoading] = useState(false);

  const getCountries = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get<CountryType[]>( // CountryType tipinde olan verilerimizi axios paketi ile çektik
        'https://restcountries.com/v2/all',
      );
      setCountries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  //console.log(countries);

  return (
    <Loading loading={isLoading}>
      <ScrollView>
        {countries.map(country => (
          <Country key={country.name} country={country} />
        ))}
      </ScrollView>
    </Loading>
  );
};

export default CountryApp;
