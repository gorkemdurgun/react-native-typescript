import React from 'react'
import { Text, View } from 'react-native'
import GetStart from '../others/GetStart'

type TCustomComponent = React.ComponentProps<typeof GetStart>;

export const CustomComponent = (props: TCustomComponent) => {
  return (
    <View>
        <Text>
            {props.name}
        </Text>
    </View>
  )
}
