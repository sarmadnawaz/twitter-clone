import React from "react";

function SignUpContainer() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [enableSignUp, setEnableSignUp] = React.useState(false);
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    if(`${password}`.length > 8){
        setEnableSignUp(true)
    }
  }, [password])

  return (
    <div className="signUp">
      <img classname="signUp__twitter-logo" src="/twitterLogo.png"></img>
      <h2 className="SignUp-header">Sign Up to Twitter</h2>
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <div className={`btn signUp__signUp-bar ${!enableSignUp ? 'deactivate' : ''}`}>SignUp</div>
      <div className="signIn__ques">
        Already have an account? <span style={{ color: "red" }}>Sign In</span>
      </div>
    </div>
  );
}

export default SignUpContainer;
