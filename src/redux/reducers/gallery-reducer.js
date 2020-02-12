import img1 from "./../../images/1.jpg";
import img2 from "./../../images/2.jpg";
import img3 from "./../../images/3.jpg";
import img4 from "./../../images/4.jpg";
import img5 from "./../../images/5.jpg";
import img6 from "./../../images/6.jpg";
import img7 from "./../../images/7.jpg";
import img8 from "./../../images/8.jpg";
import img9 from "./../../images/9.jpg";
import img10 from "./../../images/10.jpg";
import img11 from "./../../images/11.jpg";
import img12 from "./../../images/12.jpg";

const DELETE_IMAGE = 'DELETE_IMAGE';
const RESET_IMAGES = 'RESET_IMAGES';
const SET_DELETED_IMAGES = 'SET_DELETED_IMAGES';
const SET_CURRENT_IMAGE = 'SET_CURRENT_IMAGE';
const TOGGLE_MODAL_ON = 'TOGGLE_MODAL_ON';
const TOGGLE_MODAL_OFF = 'TOGGLE_MODAL_OFF';

let initialState = {
    images: [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
        { id: 5, src: img5 },
        { id: 6, src: img6 },
        { id: 7, src: img7 },
        { id: 8, src: img8 },
        { id: 9, src: img9 },
        { id: 10, src: img10 },
        { id: 11, src: img11 },
        { id: 12, src: img12 }
    ],
    deletedImages: [],
    currentImage: '',
    toggleModal: { display: 'none' }
};

let galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_IMAGE:
            return ({
                ...state,
                images: [...state.images.filter(i => i.id !== +action.imageId)]
            })
        case RESET_IMAGES:
            return {
                ...state,
                images: [
                    { id: 1, src: img1 },
                    { id: 2, src: img2 },
                    { id: 3, src: img3 },
                    { id: 4, src: img4 },
                    { id: 5, src: img5 },
                    { id: 6, src: img6 },
                    { id: 7, src: img7 },
                    { id: 8, src: img8 },
                    { id: 9, src: img9 },
                    { id: 10, src: img10 },
                    { id: 11, src: img11 },
                    { id: 12, src: img12 }
                ],
                deletedImages: []
            };
        case SET_DELETED_IMAGES:
            return {
                ...state,
                deletedImages: [
                    ...state.deletedImages,
                    ...state.images.filter(i => i.id === +action.imageId)
                ]
            };
        case SET_CURRENT_IMAGE:
            return ({
                ...state,
                currentImage: action.url
            })
        case TOGGLE_MODAL_ON:
            return ({
                ...state,
                toggleModal: { display: 'flex' }
            })
        case TOGGLE_MODAL_OFF:
            return ({
                ...state,
                toggleModal: { display: 'none' }
            })
        default:
            return state
    }
};

// AC 
const deleteImageAC = imageId => ({ type: DELETE_IMAGE, imageId })
const resetImagesAC = () => ({ type: RESET_IMAGES })
const setDeletedImagesAC = imageId => ({ type: SET_DELETED_IMAGES, imageId })
const setCurrentImageAC = url => ({ type: SET_CURRENT_IMAGE, url })
const toggleModalOnAC = () => ({ type: TOGGLE_MODAL_ON })
const toggleModalOffAC = () => ({ type: TOGGLE_MODAL_OFF })

// Thunk
export const deleteImage = imageId => dispatch => { dispatch(deleteImageAC(imageId)) }
export const resetImages = () => dispatch => { dispatch(resetImagesAC()) }
export const setDeletedImages = imageId => dispatch => { dispatch(setDeletedImagesAC(imageId)) }
export const setCurrentImage = url => dispatch => { dispatch(setCurrentImageAC(url)) }
export const toggleModalOn = () => dispatch => { dispatch(toggleModalOnAC()) }
export const toggleModalOff = () => dispatch => { dispatch(toggleModalOffAC()) }

export default galleryReducer;