import React from "react";
import { getFeed } from "./../server";

const useFeed = () => {
  const [images, setImages] = React.useState(null);
  React.useEffect(() => {
    getFeed().then(data => setImages(data));
  }, []);
  return images;
};

export default useFeed;
