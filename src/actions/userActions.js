import * as actionTypes from './userActionsType';
import {getAllUsers} from '../service/userService';

export const fetchUsersStarted = () => ({
    type:  actionTypes.FETCH_USERS_START
});

export const fetchUsersSuccess = users => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersError = errorMessage => ({
    type: actionTypes.FETCH_USERS_ERROR,
    payload: errorMessage
});

export const fetchUsers =  () => async dispatch => {
  dispatch(fetchUsersStarted())
    try{
          let users = await getAllUsers();
          dispatch(fetchUsersSuccess(users));
    }
    catch(error){
        dispatch(fetchUsersError(error.message));
    }
}

/*
export const fetchUsers =  () => async dispatch => {
    dispatch(fetchUsersStarted())
      try{
            const userResponse = await fetch("https://swapi.dev/api/people/")
            const users = await userResponse.json();
            dispatch(fetchUsersSuccess(users))
      }
      catch(error){
          dispatch(fetchUsersError(error.message))
      }
}

export const fetchUsers = () => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
      dispatch({ type: 'FETCH_USERS_START' });
      // Return promise with success and failure actions
      return axios.get('https://jsonplaceholder.typicode.com/users').then(  
        user => dispatch({ type: 'FETCH_USERS_SUCCESS', payload: user.data }),
        err => dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
      );
    };
  };
*/