import { createStore, combineReducers, applyMiddleware } from "redux";
import galleryReducer from "./reducers/gallery-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    galleryPage: galleryReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store