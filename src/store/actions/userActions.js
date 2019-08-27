export const USERS_FETCH_DATA_SUCCESS = "USERS_FETCH_DATA_SUCCESS";

export const USERS_IS_LOADING = "USERS_IS_LOADING";

export const usersIsLoading = bool => {
  return {
    type: USERS_IS_LOADING,
    isLoading: bool
  };
};

export const usersFetchDataSuccess = users => {
  return {
    type: "USERS_FETCH_DATA_SUCCESS",
    users
  }
};

export const usersFetchData = url => {
  return dispatch => {
    dispatch(usersIsLoading(true));
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
      .then(users => {
        dispatch(usersFetchDataSuccess(users));
        dispatch(usersIsLoading(false));
      });
  };
};
