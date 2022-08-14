import React, { useEffect, useRef } from "react";
import { TextInput, View } from "react-native";

export const DomRef = () =>{
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, [])
    
    return (
        <View>
            <TextInput
            keyboardType="twitter"
            ref={inputRef}
            />
            
        </View>
    );

}