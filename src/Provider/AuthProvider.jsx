/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app); // Move the initialization here
const [loading, setLoading] = useState(true) 
    const [user, setUser] = useState(null);



    const googleProvider = new GoogleAuthProvider() 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };   

    const logout = () => {
        setLoading(true)
       return signOut(auth)
    }

const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password); 
}

const googleLogin = () => {
   return signInWithPopup(auth, googleProvider) 
}


    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    } , [auth]) 

console.log(user)
    const authInfo = { user, setUser, createUser, logIn, logout, loading, googleLogin  };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
  
export default AuthProvider;
