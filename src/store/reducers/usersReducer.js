import {
  USERS_FETCH_DATA_SUCCESS,
  USERS_IS_LOADING
} from "../actions/userActions";

const initialState = {
  users: {},
  isLoading: true
};

export function userIsLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_DATA_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
