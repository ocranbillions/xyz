import { combineReducers } from 'redux';
import { SET_JOKES_CATEGORY } from '../constants';

const initialState = {
  selectedCategory: 'career'
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_JOKES_CATEGORY: {
      return {
        ...state,
        selectedCategory: action.payload as string
      }
    }
    default:
      return state;
  }
}



const rootReducer = combineReducers({ 
  categoryReducer,
  // other reducers - if any
});

export default rootReducer;