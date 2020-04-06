import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function Timestamp(props) {
  return (
    <div className="timestamp">{formatDistanceToNow(props.timestamp)} ago</div>
  );
}

export default Timestamp;
