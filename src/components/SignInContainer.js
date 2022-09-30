import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { signInUser } from '../Actions/auth'


function SignInContainer() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null)

  const handleSignIn = () => {
    signInUser(email, password)
    .then(
      (userCredential) => {
        console.log(userCredential.user)
        error  && setError(null)
      },
      (error) => setError(error.message)
    )
  }

  return (
    <div className="signIn">
      <img classname="signIn__twitter-logo" src="/twitterLogo.png"></img>
      <h2 className="SignIn-header">Sign in to Twitter</h2>
      <div className="signIn__signIn-bar">
        <FcGoogle /> Sign In with Google
      </div>
      <div className="signIn__signIn-bar">
        <BsFacebook /> Sign In with Facebook
      </div>
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
      <div className="btn signIn__signIn-bar" onClick={handleSignIn}>Login</div>
      <div className="signIn__ques">
        Don't have an account? <span style={{ color: "red" }}>Sign up</span>
      </div>
    </div>
  );
}

export default SignInContainer;
