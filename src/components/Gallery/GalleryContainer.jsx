import React, { Component } from "react";
import Gallery from "./Gallery";
import { connect } from "react-redux";
import {
  deleteImage,
  resetImages,
  setDeletedImages,
  setCurrentImage,
  toggleModalOn,
  toggleModalOff
} from "../../redux/reducers/gallery-reducer";

class GalleryContainer extends Component {
  render() {
    return <Gallery {...this.props} />;
  }
}

let mapStateToProps = state => ({
  images: state.galleryPage.images,
  currentImage: state.galleryPage.currentImage,
  toggleModal: state.galleryPage.toggleModal
});

export default connect(mapStateToProps, {
  deleteImage,
  resetImages,
  setDeletedImages,
  setCurrentImage,
  toggleModalOn,
  toggleModalOff
})(GalleryContainer);
