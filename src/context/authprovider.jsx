 import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"; 
export const Authcontext = createContext(null);
const provider = new GoogleAuthProvider()

const Authprovider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLodaing] =useState(true)


    const createuser = (email,password)=>{
        setLodaing(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

         const sininguser = (email,password)=>{
        setLodaing(true)
        return signInWithEmailAndPassword(auth,email,password)}

        const singinGoogle = ()=>{
            return signInWithPopup(auth,provider)
        }

        useEffect(()=>{
            const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser)
            })
            return() =>{
             unsubscribe ()
            }
        },[])
  const authinfo = {
                   createuser,
                   sininguser, 
                   user,
                   setUser,
                   loading,
                   setLodaing,
                   singinGoogle
                  
   
  };

  return (
    <Authcontext.Provider value={authinfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
