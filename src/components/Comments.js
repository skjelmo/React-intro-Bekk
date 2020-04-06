import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = props => {
  const [comments, setComments] = React.useState(props.comments);

  const addComment = comment => {
    setComments(prevState => [...prevState, comment]);
  };

  if (comments) {
    return (
      <div className="comments">
        {comments.map((comment, key) => (
          <Comment key={key} comment={comment} />
        ))}
        <CommentForm
          addComment={comment => addComment(comment)}
          imageId={props.imageId}
        />
      </div>
    );
  }
  return <CommentForm imageId={props.imageId} />;
};

export default Comments;
