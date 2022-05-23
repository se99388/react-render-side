export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  //api is the axiosInstance that comes from the server with baseURL:'http://react-ssr-api.herokuapp.com' and again from client with baseURL:'/api'
  const res = await api.get('/users');
  //disptch is supplied by redux-thunck
  dispatch({ type: FETCH_USERS, payload: res });
};

console.log(1);
export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({ type: FETCH_CURRENT_USER, payload: res });
};
