import * as actionTypes from '../actions/userActionsType';
import {INITIAL_STATE} from './userInitialState'


const fetchUsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case actionTypes.FETCH_USERS_START:
        return {
          ...state,
          isFetching: true
        };
      case actionTypes.FETCH_USERS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          users: action.payload
        };
      case actionTypes.FETCH_USERS_ERROR:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload
        };
      default:
        return state;
    }
  };
  export default fetchUsersReducer;