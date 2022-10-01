import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { signInUser } from '../Actions/auth'
import { Navigate } from "react-router-dom";


function SignInContainer() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null)

  const handleSignIn = () => {
    signInUser(email, password)
    .then(
      (userCredential) => {
        Navigate('/dashboard')
        error  && setError(null)
      },
      (error) => setError(error.message)
    )
  }

  return (
    <div className="signIn">
      <img className="signIn__twitter-logo" src="/img/twitter-logo-l.png"></img>
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
