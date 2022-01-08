import { combineReducers } from "redux"; // this is a package that combines all the reducers
import accountReducer from './accountReducer';

const reducers = combineReducers({
    account: accountReducer,
});

export default reducers