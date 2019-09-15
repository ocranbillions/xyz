import axios from 'axios';
import { setAlert } from './alertActions.js';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_LOADING,
  LOGOUT,
  CLEAR_PROFILE
} from './constants';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const user = jwtDecode(localStorage.token);

    dispatch({
      type: USER_LOADED,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ firstName, lastName, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ firstName, lastName, email, password });

  dispatch({
    type: AUTH_LOADING
  })
  try {
    const res = await axios.post('https://my-banka.herokuapp.com/api/v1/auth/signup', body, config);

    // dispatch success if everything goes well.
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data
    });
    dispatch(loadUser());

  } catch (err) {
    const { errorMessage } = err.response.data;
    dispatch(setAlert(errorMessage, 'danger'));

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  dispatch({
    type: AUTH_LOADING
  })
  try {
    const res = await axios.post('https://my-banka.herokuapp.com/api/v1/auth/signin', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data
    });
    dispatch(loadUser());
    
  } catch (err) {
    const { errorMessage } = err.response.data;
    dispatch(setAlert(errorMessage, 'danger'));

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};