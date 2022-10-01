import React from "react";
import Tweet from "./tweet";
import { TwitterEmbed } from "react-social-media-embed";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-left">
        <Tweet />
        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />
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
