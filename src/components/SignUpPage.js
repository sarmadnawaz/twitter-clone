import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "./UI/Modal";
import SignInContainer from "./SignInContainer";
import SignUpContainer from "./SignUpContainer";

function SignUpPage() {
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  return (
    <>
      <div className="signUp-page">
        <img classname="signUp-page__twitter-logo" src="/twitterLogo.png"></img>
        <h1 className="signUp-page__header">Happening now</h1>
        <h2 className="signUp-page__sub-header">Join Twitter Today</h2>
        <div className="signUp-page__signUp-bar">
          <FcGoogle /> Sign up with Google
        </div>
        <div className="signUp-page__signUp-bar">
          <BsFacebook /> Sign up with Facebook
        </div>
        <div className="btn signUp-page__signUp-bar" onClick={() => setOpenSignUp(true)}>
          <MdEmail /> Sign up with email
        </div>
        <h3 className="signUp-page__login-bar__header">
          Already have an account?
        </h3>
        <div className="signUp-page__login-bar" onClick={() => setOpenSignIn(true)}>
          Sign In
        </div>
      </div>
      {openSignIn && (
        <div>
          <Modal>
            <IoCloseOutline
              style={{ fontSize: "26px", padding: "10px" }}
              onClick={() => setOpenSignIn(false)}
            />
            <SignInContainer />
          </Modal>
        </div>
      )}
      {openSignUp && (
        <div>
          <Modal>
            <IoCloseOutline
              style={{ fontSize: "26px", padding: "10px" }}
              onClick={() => setOpenSignUp(false)}
            />
            <SignUpContainer />
          </Modal>
        </div>
      )}
    </>
  );
}

export default SignUpPage;
