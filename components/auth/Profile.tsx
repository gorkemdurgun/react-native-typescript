import React from "react";
import { Text, View } from "react-native";

export type TProfileProps= {
    name: string,
}

export const Profile = ({name} : TProfileProps) =>{
    return(
        <View>
            <Text>Hi {name}</Text>
        </View>
    );
}