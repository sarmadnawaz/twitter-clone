import React from "react";
import { signUpUser } from '../Actions/auth';
import { UploadImageToStorage } from '../Actions/storage';
import { v4 as uid } from 'uuid';
import Avatar from "./UI/Avatar";
import { useNavigate } from 'react-router-dom'

function SignUpContainer() {
  const [image, setImage] = React.useState(null);
  const [username, setUsername] = React.useState('');
  // const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [enableSignUp, setEnableSignUp] = React.useState(false);
  const [error, setError] = React.useState(null)
  const navigate = useNavigate()
  
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
  
  const handleSignUp = () => {
    signUpUser(email, password, username, image)
    .then(
      () => {
        navigate('/dashboard')
      },
      (error) => setError(error.message)
    )
  }

  React.useEffect(() => {
    if(`${password}`.length > 8){
        setEnableSignUp(true)
    }
  }, [password])

  return (
    <div className="signUp">
      <div className="profile-input">
        <Avatar imageUrl={image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} size="large" />
        <label htmlFor="profile-input">Upload Profile</label>
        <input type="file" id="profile-input" hidden onChange={handleImageUpload}/>
      </div>
      <h2 className="signUp-header">Sign Up to Twitter</h2>
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* <input
        value={name}
        type="text"
        placeholder="username"
        onChange={(e) => setName(e.target.value)}
      /> */}
      <input
        value={email}
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color : 'red' }}>Invalid user credientials</p>}
      <div className={`btn signUp__signUp-bar ${!enableSignUp ? 'deactivate' : ''}`} onClick={handleSignUp}>SignUp</div>
      <div className="signIn__ques">
        Already have an account? <span style={{ color: "red" }}>Sign In</span>
      </div>
    </div>
  );
}

export default SignUpContainer;
