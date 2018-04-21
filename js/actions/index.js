import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = '?key=justsomerandomstring';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function addPostsData(apiData) {
  return {
    type: FETCH_POSTS,
    payload: apiData
  };
}

export function fetchPosts() {
  return dispatch => {
    const request = axios
      .get(`${ROOT_URL}/posts${API_KEY}`)
      .then(response => {
        dispatch(addPostsData(response.data));
      })
      .catch(error => {
        console.log('fetchPosts error', error); // eslint-disable-line no-console
      });

    return request;
  };
}

export function addPostData(apiData) {
  return {
    type: FETCH_POST,
    payload: apiData
  };
}

export function fetchPost(id) {
  return dispatch => {
    const request = axios
      .get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then(response => {
        dispatch(addPostData(response.data));
      })
      .catch(error => {
        console.log('fetchPost error', error); // eslint-disable-line no-console
      });

    return request;
  };
}

export function addNewPost(apiData) {
  return {
    type: CREATE_POST,
    payload: apiData
  };
}

export function createPost(props) {
  return dispatch => {
    const request = axios
      .post(`${ROOT_URL}/posts${API_KEY}`, props)
      .then(response => {
        dispatch(addNewPost(response.data));
      })
      .then(() => browserHistory.push('/'))
      .catch(error => {
        console.log('createPost error', error); // eslint-disable-line no-console
      });

    return request;
  };
}

export function deletePostData(apiData) {
  return {
    type: DELETE_POST,
    payload: apiData
  };
}

export function deletePost(id) {
  return dispatch => {
    const request = axios
      .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then(response => {
        dispatch(deletePostData(response.data));
      })
      .then(() => browserHistory.push('/'))
      .catch(error => {
        console.log('deletePost error', error); // eslint-disable-line no-console
      });

    return request;
  };
}
