import React from "react";
import Avatar from "../UI/Avatar";
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'

function Tweet({text = undefined, image = undefined, username, profile = null}) {
  return (
    <div className="tweet">
      <div className="tweet-user_profile">
        <Avatar imageUrl={profile || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
      </div>
      <div className="tweet-header">
        <h3>{username}</h3>
        <p>@{username}</p>
      </div>
      {text && 
      <p className="tweet-text">
        {text}
      </p>
      }
      {image && 
      <img
      className="tweet-image"
      src={image}
      />
       }
      <div className="tweet-footer">
            <AiOutlineRetweet style={{ fontSize : '26px' }}/>
            <AiOutlineHeart style={{ fontSize : '26px' }}/>
      </div>
    </div>
  );
}

export default Tweet;
