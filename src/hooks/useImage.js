import React from "react";
import { getImage } from "./../server";

const useImage = id => {
  const [image, setImage] = React.useState(null);
  React.useEffect(() => {
    getImage(id).then(data => setImage(data));
  }, [id]);
  return image;
};

export default useImage;
