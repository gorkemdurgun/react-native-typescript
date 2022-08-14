import { Text, View } from "react-native";
import React, { useContext } from 'react'
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
    const theme = useContext(ThemeContext);
    return(
        <View style={{ flex:1, backgroundColor: theme.primary.main }}>
            <Text>Theme context</Text>
        </View>
    );
}