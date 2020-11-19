import {
  GET_CATS,
  GET_CATS_SUCCESS,
  GET_CATS_FAILURE,
} from "../constants/actionTypes";

export const initialState = {
  loading: false,
  data: null,
  error: false,
};

export const catsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATS:
      return {
        ...initialState,
        loading: true,
      };
    case GET_CATS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case GET_CATS_FAILURE:
      return {
        ...initialState,
        error: true,
      };
    default:
      return state;
  }
};
