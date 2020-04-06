import React from "react";
import Post from ".././components/Post";
import Image from ".././components/Image";
//import images from ".././data/images";
import { Link } from "react-router-dom";
import useTitle from "./../hooks/useTitle";
import useFeed from "./../hooks/useFeed";
import AddImage from "./../modals/AddImage";

export default function FeedPage(props) {
  useTitle("Bekkstagram");

  const [images, setImages] = React.useState(null);

  const imagesFromFeed = useFeed();

  React.useEffect(() => {
    setImages(imagesFromFeed);
  }, [imagesFromFeed]);

  const onAddImage = image => {
    setImages(prevImages => [...prevImages, image]);
  };

  if (!images) {
    return null;
  }
  return (
    <div className="images">
      {images.map(image => (
        <Post
          imageId={image.id}
          key={image.id}
          author={image.username}
          timestamp={image.createdDate}
          comments={image.comments}
        >
          <Link to={`/post/${image.id}`}>
            <Image src={image.url} alt={image.description} />
          </Link>
        </Post>
      ))}
      <AddImage onAddImage={onAddImage} />
    </div>
  );
}
