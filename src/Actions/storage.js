import { storage } from "../firebase/firebase"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const UploadImageToStorage = async({image, id}) => {
    try{
        const snapshot = await uploadBytes(ref(storage, `images/${id}`), image)
        const url = getDownloadURL(snapshot.ref)
        return url
    }catch(error
    ){
        throw new Error(error.message)
    }
}  
