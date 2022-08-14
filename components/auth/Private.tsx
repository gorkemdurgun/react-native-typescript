import React from "react"
import { View } from "react-native"
import { Login } from "./Login"
import { TProfileProps } from "./Profile";

type TPrivateProps ={
    isLoggedIn: boolean,
    component: React.ComponentType<TProfileProps>,
};

export const Private = ({isLoggedIn, component: Component}: TPrivateProps) =>{
    if(isLoggedIn){
        return <Component name="Görkem Durgun"/>
    }
    else{
        return <Login/>
    }
}