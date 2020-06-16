import { combineReducers } from 'redux';
import fetchUsersReducer from './reducers/fetchUsersReducer'
const rootReducer = combineReducers({
 users: fetchUsersReducer,
});
export default rootReducer;