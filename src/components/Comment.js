import React from "react";
import Timestamp from "./Timestamp";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <span className="comment-user">{comment.username}</span>
      <span className="comment-text">{comment.text}</span>
      <Timestamp timestamp={comment.createdDate} />
    </div>
  );
};

export default Comment;
