import React from "react";
import Tweet from "./tweet";
import { TwitterEmbed } from "react-social-media-embed";
import UploadTweet from "./UploadTweet";
import { retrieveTweetsFromFireStore } from "../../Actions/firestore";

function Feed() {
  const [status, setStatus] = React.useState("idle");
  const [tweets, setTweets] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    retrieveTweetsFromFireStore(setTweets)
      .then(() => setStatus("success"))
      .catch((error) => setError(error));
  }, []);


  return (
    <div className="feed">
      <div className="feed-left">
        <UploadTweet />
        {status === "success" && tweets.map((tweet) => <Tweet  {...tweet}/>)}
      </div>
      <div className="feed-right">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TwitterEmbed
            url="https://twitter.com/PixelAndBracket/status/1356633038717923333"
            width={325}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TwitterEmbed
            url="https://twitter.com/Sarmadnawazk/status/1565407543756992512"
            width={325}
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
