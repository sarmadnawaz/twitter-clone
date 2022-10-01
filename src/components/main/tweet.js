import React from "react";
import Avatar from "../UI/Avatar";
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'

function Tweet() {
  return (
    <div className="tweet">
      <div className="tweet-user_profile">
        <Avatar imageUrl={"https://xsgames.co/randomusers/avatar.php?g=male"} />
      </div>
      <div className="tweet-header">
        <h3>User Name</h3><p>@Username</p>
      </div>
      <p className="tweet-text">
        Hey this is my tweet Hey this is my tweet Hey this is my tweet Hey this
        is my tweet Hey this is my tweet Hey this is my tweet Hey this is my
        tweet Hey this is my tweet Hey this is my tweet Hey this is my tweet Hey
        this is my tweet Hey this is my tweet Hey this is my tweet Hey this is
        my tweet Hey this is my tweet Hey this is my tweet Hey this is my tweet
        Hey this is my tweet Hey this is my tweet Hey this is my tweet Hey this
        is my tweet Hey this is my tweet Hey this is my tweet Hey this is my
        tweet
      </p>
      <img
        className="tweet-image"
        src="https://media.istockphoto.com/photos/lottery-picture-id95442265?s=612x612"
      />
      <div className="tweet-footer">
            <AiOutlineRetweet style={{ fontSize : '26px' }}/>
            <AiOutlineHeart style={{ fontSize : '26px' }}/>
      </div>
    </div>
  );
}

export default Tweet;
