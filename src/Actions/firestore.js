import { addDoc, collection, onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export const uploadTweetToFireStore = async ({text, image, username, profile}) => {
    try{
        await addDoc(collection(db, "posts"), {
            text, image, username, profile
        })    
    }catch(error){ 
        throw new Error(error.message) 
    }
}

export const retrieveTweetsFromFireStore = async (setTweets) => {
    try{
        const unsub = onSnapshot(collection(db, 'posts'), snapshot => {
            let tweets = [];
            snapshot.forEach(doc => tweets.push(doc.data()))
            setTweets(tweets)
        });
    }catch(error){
        throw new Error(error.message)
    }
}