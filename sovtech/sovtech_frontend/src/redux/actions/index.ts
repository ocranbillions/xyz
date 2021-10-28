import { SET_JOKES_CATEGORY } from '../constants';

export const setCategory = (category: string) => ({
  type: SET_JOKES_CATEGORY,
  payload: (category + " " + Math.random())
})

