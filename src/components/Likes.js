import React from "react";

export default function Likes(props) {
  const [likes, setLikes] = React.useState(0);

  function incrementLikes() {
    setLikes(likes + 1);
  }

  return (
    <div className="likes">
      Likes: {likes}{" "}
      <button
        className="like-button"
        aria-label="like button"
        onClick={incrementLikes}
      >
        <span role="img" aria-label="thumbs up">
          👍
        </span>
      </button>
    </div>
  );
}
