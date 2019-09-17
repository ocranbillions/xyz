import {
  LOADING_ACCOUNTS, ACCOUNTS_LOADED, ACCOUNTS_LOADING_FAILED,
  CLEAR_ACCOUNTS,
} from '../actions/constants';

const initialState = {
  accounts: [],
  loading: null,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING_ACCOUNTS:
      return {
        ...state,
        loading: true,
      }
    case ACCOUNTS_LOADED:
      return {
        ...state,
        accounts: [...payload],
        loading: false,
      };
    case ACCOUNTS_LOADING_FAILED:
    case CLEAR_ACCOUNTS:
      return {
        ...state,
        accounts: [],
        loading: false,
        error: null
      };
    default:
      return state;
  }
}