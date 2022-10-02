import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export const uploadTweetToFireStore = async ({text, image, username}) => {
    try{
        await addDoc(collection(db, "posts"), {
            text, image, username
        })    
    }catch(error){ 
        throw new Error(error.message) 
    }
}