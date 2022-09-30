import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

function SignInContainer() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

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
      <div className="btn signIn__signIn-bar">Login</div>
      <div className="signIn__ques">
        Don't have an account? <span style={{ color: "red" }}>Sign up</span>
      </div>
    </div>
  );
}

export default SignInContainer;
