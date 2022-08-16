import React, { useEffect, useRef } from "react";
import { TextInput, View } from "react-native";

export const DomRef = () =>{
    const inputRef = useRef<TextInput>(null); // TextInput refi olduğu için tipini TextInput olarak tanımladık

    useEffect(() => {
      inputRef.current?.focus(); // null check yaptık
    }, [])
    
    return (
        <View>
            <TextInput
            keyboardType="email-address"
            ref={inputRef}
            />
            
        </View>
    );

}