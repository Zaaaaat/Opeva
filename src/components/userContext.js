import React, {createContext, useState} from "react";
import {auth} from "../firebase.config";
import{ signInWithEmailAndPassword, onAuthStateChanged,} from "firebase/auth";

export const UserContext = createContext()

export default function UserContextProvider(props){

    const[currentUser, setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    return (
        <UserContext.Provider value={{currentUser, signIn}}>
            {props.children}
        </UserContext.Provider>
    )
}