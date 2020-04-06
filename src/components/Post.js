import React from "react";
import Likes from "./Likes";
import Timestamp from "./Timestamp";
import Comments from "./Comments";

function Author(props) {
  return <div className="author">{props.children}</div>;
}

const Post = props => {
  return (
    <div className="post">
      <Author>{props.author}</Author>
      {props.children}
      <div className="post-details">
        <Timestamp timestamp={props.timestamp} />
        <Likes />
      </div>
      <Comments imageId={props.imageId} comments={props.comments} />
    </div>
  );
};

export default Post;
