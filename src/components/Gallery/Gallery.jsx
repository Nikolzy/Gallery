import React from "react";
import GalleryItems from "./GalleryItems/GalleryItems";
import GalleryInfo from "./GalleryInfo/GalleryInfo";

const Gallery = props => {
  let currentImage = '';

  let handleReset = () => {
    props.resetImages();
  };

  let openImage = e => {
    const { id } = e.currentTarget;
    currentImage = props.images.filter(i => i.id === +id)[0].src;
    props.setCurrentImage(currentImage);
    props.toggleModalOn(props.toggleModal)
  };

  let closeImage = () => {
    props.toggleModalOff(props.toggleModal)
  }

  return (
    <>
      <div className="myModal" style={props.toggleModal}>
        <div className="modal_content">
          <span className="close" onClick={closeImage}></span>
          <div className="current_image">
            <img src={props.currentImage} className="modal_content" alt="" />
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="info">
          <GalleryInfo images={props.images} />
        </div>
        <div className="gallery_container">
          <GalleryItems {...props} openImage={openImage} />
          <div className="reset_button">
            <button type="submit" onClick={handleReset}>
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
