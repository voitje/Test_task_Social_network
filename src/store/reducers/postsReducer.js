import {POSTS_IS_LOADING, POSTS_FETCH_DATA_SUCCESS} from "../actions/postsAction";

const initialState = {
  posts: {},
  isLoading: true,
};

export const postsIsLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCH_DATA_SUCCESS:
      return action.posts;
    default:
      return state;
  }
};
