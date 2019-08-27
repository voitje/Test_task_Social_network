export const POSTS_FETCH_DATA_SUCCESS = 'POSTS_FETCH_DATA_SUCCESS';

export const POSTS_IS_LOADING = 'POSTS_IS_LOADING';

export const postsIsLoading = bool => {
  return {
    type: POSTS_IS_LOADING,
    isLoading: bool,
  }
};

export const postsFetchDataSuccess = posts => {
  return {
    type: 'POSTS_FETCH_DATA_SUCCESS',
    posts
  };
};

export const postsFetchData = url => {
  return dispatch => {
    dispatch(postsIsLoading(true));
    fetch(url)
        .then(async response => {
          const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

          await delay(1000);

          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(posts => {
          dispatch(postsFetchDataSuccess(posts));
          dispatch(postsIsLoading(false))
        })
  }
};
