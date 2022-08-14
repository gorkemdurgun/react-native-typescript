import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CountryType } from './Types/country_types'

interface ICountryProps{
    country: CountryType
}

export default function Country({country}: ICountryProps) {
  return (
    <View>
      <TouchableOpacity onPress={()=> console.log(country.name)}>
      <Text> {country.capital} </Text>
      </TouchableOpacity>
    </View>
  )
}