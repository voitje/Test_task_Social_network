export const COMMENTS_FETCH_DATA_SUCCESS = 'COMMENTS_FETCH_DATA_SUCCESS';

export const COMMENTS_IS_LOADING = 'COMMENTS_IS_LOADING';

export const commentsIsLoading = bool => {
  return {
    type: COMMENTS_IS_LOADING,
    isLoading: bool
  }
};

export const commentsFetchDataSuccess = comments => {
  return {
    type: 'COMMENTS_FETCH_DATA_SUCCESS',
    comments
  }
};

export const commentsFetchData = url => {
  return dispatch => {
    dispatch(commentsIsLoading(true));
    fetch(url)
        .then (async response => {
          const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

          await delay (1000);

          if(!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(comments => {
          dispatch(commentsFetchDataSuccess(comments));
          dispatch(commentsIsLoading(false));
        })
  }
}
