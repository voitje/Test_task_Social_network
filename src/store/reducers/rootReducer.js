import { combineReducers } from "redux";
import { usersReducer, userIsLoadingReducer } from "./usersReducer";
import {postsReducer, postsIsLoadingReducer} from "./postsReducer";
import {commentsReducer, commentsIsLoadingReducer} from "./commentsReducer";

export const rootReducer = combineReducers({
  usersReducer,
  userIsLoadingReducer,
  postsReducer,
  postsIsLoadingReducer,
  commentsReducer,
  commentsIsLoadingReducer
});
