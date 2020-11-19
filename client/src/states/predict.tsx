import {
  PREDICT_CAT_BREED,
  PREDICT_CAT_BREED_FAILURE,
  PREDICT_CAT_BREED_SUCCESS,
} from "../constants/actionTypes";

export const initialState = {
  loading: false,
  data: null,
  error: false,
};

export const predictReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PREDICT_CAT_BREED:
      return {
        ...initialState,
        loading: true,
      };
    case PREDICT_CAT_BREED_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case PREDICT_CAT_BREED_FAILURE:
      return {
        ...initialState,
        error: true,
      };
    default:
      return state;
  }
};
