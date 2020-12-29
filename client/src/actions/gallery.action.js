import { httpClient } from "./../utils/HttpClient";
import {
  GALLERY_SUCCESS,
  GALLERY_FETCHING,
  GALLERY_FAILED,
  server,
  GALLERY_CLEAR,
  GALLERY_GETLIST_SUCCESS,
  GALLERY_GETLIST_FETCHING,
  GALLERY_GETLIST_FAILED,
  GALLERY_DELETE_SUCCESS,
  GALLERY_DELETE_FETCHING,
  GALLERY_DELETE_FAILED,
} from "../constants";

export const setStateGalleryToSuccess = (payload) => ({
  type: GALLERY_SUCCESS,
  payload,
});

const setStateGalleryToFetching = () => ({
  type: GALLERY_FETCHING,
});

const setStateGalleryDeleteToFetching = () => ({
  type: GALLERY_DELETE_FETCHING,
});

const setStateGalleryDeleteToSuccess = () => ({
  type: GALLERY_DELETE_SUCCESS,
});

const setStateGalleryDeleteToFailed = () => ({
  type: GALLERY_DELETE_FAILED,
});

const setStateGalleryListToSuccess = (payload) => ({
  type: GALLERY_GETLIST_SUCCESS,
  payload,
});
const setStateGalleryListToFailed = (payload) => ({
  type: GALLERY_GETLIST_FAILED,
  payload,
});

const setStateGalleryListToFetching = () => ({
  type: GALLERY_GETLIST_FETCHING,
});

const setStateGalleryToFailed = () => ({
  type: GALLERY_FAILED,
});

const setStateGalleryToClear = () => ({
  type: GALLERY_CLEAR,
});

export const clearGallery = () => {
  return (dispatch) => {
    dispatch(setStateGalleryToClear());
  };
};

export const getGallerys = () => {
  return (dispatch) => {
    dispatch(setStateGalleryToFetching());
    doGetGallerys(dispatch);
  };
};

export const addGallery = (formData, history) => {
  return async (dispatch) => {
    await httpClient.post(server.GALLERY_URL, formData);
    history.goBack();
  };
};

export const updateGallery = (formData, history) => {
  return async (dispatch) => {
    await httpClient.put(server.GALLERY_URL, formData);
    // dispatch(getGallerys());
    history.goBack();
  };
};

export const getGalleryById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setStateGalleryToFetching());
      let result = await httpClient.get(`${server.GALLERY_URL}/id/${id}`);
      console.log(result);
      console.log(id);
      dispatch(setStateGalleryToSuccess(result.data));
    } catch (error) {
      alert(JSON.stringify(error));
      dispatch(setStateGalleryToFailed());
    }
  };
};

export const deleteGallery = (id, history) => {
  return async (dispatch) => {
    try {
      dispatch(setStateGalleryDeleteToFetching());
      await httpClient.delete(`${server.GALLERY_URL}/id/${id}`);
      dispatch(setStateGalleryDeleteToSuccess());
      history.goback();
    } catch (error) {
      dispatch(setStateGalleryDeleteToFailed());
    }
  };
};

export const deleteGalleryAll = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setStateGalleryDeleteToFetching());
      await httpClient.delete(`${server.GALLERY_URL}/id/${id}`);
      dispatch(setStateGalleryDeleteToSuccess());
      dispatch(getGallerys());
    } catch (error) {
      dispatch(setStateGalleryDeleteToFailed());
    }
  };
};

export const getGalleryByKeyword = (event) => {
  return async (dispatch) => {
    var keyword = event.target.value;
    dispatch(setStateGalleryToFetching());

    if (keyword !== null && keyword !== "") {
      let result = await httpClient.get(
        `${server.GALLERY_URL}/name/${keyword}`
      );
      dispatch(setStateGalleryToSuccess(result.data));
    } else {
      doGetGallerys(dispatch);
    }
  };
};

const doGetGallerys = async (dispatch) => {
  try {
    let result = await httpClient.get(server.GALLERY_URL);
    console.log(result.data);
    dispatch(setStateGalleryListToSuccess(result.data));
  } catch (err) {
    // alert(JSON.stringify(err));
    dispatch(setStateGalleryListToFailed());
  }
};
