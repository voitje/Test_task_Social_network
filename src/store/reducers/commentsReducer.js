import {
  COMMENTS_FETCH_DATA_SUCCESS,
  COMMENTS_IS_LOADING
} from "../actions/commentsAction";

const initialState = {
  comments: {},
  isLoading: true
};

export const commentsIsLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_FETCH_DATA_SUCCESS:
      return action.comments;
    default:
      return state;
  }
};
