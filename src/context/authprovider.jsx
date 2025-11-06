 import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"; 
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
          setLodaing(true)
            return signInWithPopup(auth,provider)
        }
         const signOutUser = () =>{
        setLodaing(true)
        return signOut(auth);
    }


        useEffect(()=>{
            const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser)
               

              setLodaing(false)
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
                   singinGoogle,
                   signOutUser
                  

   
  };

  return (
    <Authcontext.Provider value={authinfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
