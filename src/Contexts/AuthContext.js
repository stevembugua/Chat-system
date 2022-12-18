import React, { useEffect } from "react";
import { createContext,  useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, Timestamp ,getFirestore, namedQuery} from "firebase/firestore"; 


import { app } from "../FIREBASE/FIREBASECONFIG";


const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{


//set the user
const [currentUser, setCurrentUser]  = useState(null);

//set loading state

const [loading, setLoading] = useState(false)

//create the auth 

const auth = getAuth(app)

//creat db
const db = getFirestore(app);



//sign in the user
const userLogin = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in +
                const user = userCredential.user;
                setCurrentUser(user);
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Failed with error : ' + errorMessage)
                alert(errorMessage)
            });

 }

 //create new user account 

const creatAccount = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setCurrentUser(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Failed with error : ' + errorMessage)
    alert(errorMessage)


    // ..
  });
}


//Log the user out

const signOut = ()=>{
    auth.signOut()
}



//observer for changes in the user object
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...

    setCurrentUser(user)
  } else {
    // User is signed out
    // ...
    setCurrentUser(null)
  }
});


//Add a player to the firestore

const addPlayer = async (player, user)=>{
    await setDoc(doc(db, "Players", user.uid), player);

}


 useEffect(async()=>{
  const request = await fetch('')
  .then((resPromise)=>resPromise.json())
 })

 const values = {
     currentUser , userLogin, creatAccount, signOut, addPlayer, 
 }



    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext