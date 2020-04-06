import React from "react";
import { putComment } from "./../server";

export const CommentForm = props => {
  const [comment, setComment] = React.useState("");

  async function onCommentSubmit() {
    if (comment.length === 0) {
      return;
    }
    const commentsResponse = await putComment(props.imageId, comment);
    props.addComment(commentsResponse);
    setComment("");
  }

  return (
    <div className="comment-form">
      <input
        value={comment}
        onChange={event => setComment(event.target.value)}
        placeholder="Add a comment..."
      />
      <button className="comment-form-button" onClick={onCommentSubmit}>
        Post
      </button>
    </div>
  );
};

export default CommentForm;
