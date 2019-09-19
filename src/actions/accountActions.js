import axios from 'axios';
import { message as alert } from 'antd';
import {
  LOADING_ACCOUNTS, ACCOUNTS_LOADED, ACCOUNTS_LOADING_FAILED,
} from './constants';

export const fetchAccountsByEmail = (email) => async dispatch => {
  dispatch({
    type: LOADING_ACCOUNTS
  })
  try {
    const res = await axios.get(`https://my-banka.herokuapp.com/api/v1/users/${email}/accounts`);

    dispatch({
      type: ACCOUNTS_LOADED,
      payload: res.data.data
    });
    
    alert.success('Accounts loaded');

  } catch (err) {
    console.log(12222, err);
    const { errorMessage } = err.response.data;
    alert.error(errorMessage);
    dispatch({
      type: ACCOUNTS_LOADING_FAILED
    });
  }
};

export const fetchAccountTransactions = (accountNumber) => async dispatch => {
  dispatch({
    type: LOADING_ACCOUNTS
  })
  try {
    const res = await axios.get(`https://my-banka.herokuapp.com/api/v1/accounts/4194194410/transactions/`);

    dispatch({
      type: ACCOUNTS_LOADED,
      payload: res.data.data
    });
    
    alert.success('Accounts loaded');

  } catch (err) {
    console.log(12222, err);
    const { errorMessage } = err.response.data;
    alert.error(errorMessage);
    dispatch({
      type: ACCOUNTS_LOADING_FAILED
    });
  }
};