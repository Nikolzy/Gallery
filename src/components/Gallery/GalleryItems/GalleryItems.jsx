import React from "react";

const GalleryItems = props => {
  
  let handleClick = e => {
    const { id } = e.currentTarget
    props.setDeletedImages(id)
    props.deleteImage(id)
  }

  let handleOpenImage = e => {
    props.openImage(e)
  }

  let renderImages = () => {
    return props.images.map(i => (
      <div className="item_wrapper" key={i.id} >
        <div className="gallery_item" id={i.id} onClick={handleOpenImage}>
          <img src={i.src} alt="" />
        </div>
        <div className='delete' id={i.id} onClick={handleClick}></div>
      </div>
    ));
  };
  return <div className="gallery_items">{renderImages()}</div>;
};

export default GalleryItems;
