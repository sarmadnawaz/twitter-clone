import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
export const signUpUser = async (email, password, username) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const userData = await addDoc(collection(db, 'users'), {email, password, username})
    await updateProfile(userCredentials.user, {
      displayName: username
    }) 
    return userCredentials;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const signInUser = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

export const signOutUser = async () => {
  try{
    await signOut(auth)
  }catch(error){
    throw new Error(error.message)
  }
}
  