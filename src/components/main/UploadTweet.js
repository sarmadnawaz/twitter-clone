import React from 'react';
import { BsImage } from 'react-icons/bs'
import Avatar from '../UI/Avatar'
import {UploadImageToStorage} from '../../Actions/storage'
import { uploadTweetToFireStore } from '../../Actions/firestore'
import { v4 as uid } from 'uuid';
import  UserContext from '../../store/userContext'

function UploadTweet(){
    const [text, setText] = React.useState('')
    const [image, setImage] = React.useState(null);
    const user = React.useContext(UserContext)

    function handleImageUpload(e){
        const image = e.target.files[0]
        const id = uid();
        if(image){
            UploadImageToStorage({ image, id }).then(
                url => setImage(url)
            ).catch(error => {
                console.log(error)
            })
        }
        return
    }
    function handleUploadTweet(){
        uploadTweetToFireStore({text, image,  username : user.displayName })
        .then(() => {
            setText('');
            setImage(null)
        })
        .catch(error => alert(error))
    }
    return(
    <div className='upload-tweet'>
        <div className='upload-tweet-user_profile'>
        <Avatar imageUrl={"https://xsgames.co/randomusers/avatar.php?g=male"} />
        </div>
        <textarea className='upload-tweet-text' placeholder="What's happening" value={text} onChange={(e => setText(e.target.value))}/>
        <div className='upload-tweet-image'>
        {image && <img src={image}/>}
        </div>
        <div className='upload-tweet-submits'>
        <label for="image-input">
            <BsImage className='upload-tweet-image-icon' />
        </label>
        <input  hidden id='image-input' className='image-input' type="file" onChange={handleImageUpload} />
        <button className='upload-tweet-btn' onClick={handleUploadTweet}>Tweet</button>       
        </div>
    </div>
    )
}


export default UploadTweet