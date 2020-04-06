import React from "react";
import { uploadImage } from "./../server";
import { FaCameraRetro } from "react-icons/fa";
import { Dialog } from "@reach/dialog";

const AddImage = props => {
  const [showDialog, setShowDialog] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  const [imageDescription, setImageDescription] = React.useState("");

  const addImage = async (url, description) => {
    const imageResponse = await uploadImage({
      url,
      description
    });
    if (!imageResponse) {
      return;
    }
    props.onAddImage(imageResponse);
    resetAndCloseDialog();
  };

  const resetAndCloseDialog = () => {
    setImageUrl("");
    setImageDescription("");
    setShowDialog(false);
  };

  return (
    <div className="add-image-container">
      <button className="camera-button" onClick={() => setShowDialog(true)}>
        <FaCameraRetro />
      </button>
      <Dialog
        className="add-image-dialog"
        isOpen={showDialog}
        onDismiss={() => setShowDialog(false)}
      >
        <h3>Publiser et nytt bilde</h3>
        <input
          className="add-image-dialog-input"
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
          placeholder="Url'en til bildet..."
        />
        <input
          className="add-image-dialog-input"
          value={imageDescription}
          onChange={event => setImageDescription(event.target.value)}
          placeholder="Bildebeskrivelse..."
        />
        {imageUrl.length > 0 ? (
          <button
            className="add-image-dialog-publiserbutton"
            onClick={() => addImage(imageUrl, imageDescription)}
          >
            Publiser!
          </button>
        ) : (
          <button className="add-image-dialog-publiserbutton-disabled" disabled>
            Publiser!
          </button>
        )}

        <button
          className="add-image-dialog-avbrytbutton"
          onClick={() => {
            resetAndCloseDialog();
          }}
        >
          Avbryt
        </button>
      </Dialog>
    </div>
  );
};

export default AddImage;
