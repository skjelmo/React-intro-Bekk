import React from "react";
import Post from "./../components/Post";
import Image from "./../components/Image";
import { useParams } from "react-router-dom";
import useImage from "./../hooks/useImage";
import useTitle from "./../hooks/useTitle";

export default function DetailPage() {
  const { id } = useParams();
  const image = useImage(id);
  const username = image ? image.username : "ukjent";
  useTitle(`📷 av ${username}`);
  if (image == null) {
    return null;
  }
  return (
    <div className="detail">
      <Post
        imageId={image.id}
        author={image.username}
        timestamp={image.createdDate}
        comments={image.comments}
      >
        <Image key={image.id} src={image.url} alt={image.description} />
      </Post>
    </div>
  );
}
