import { combineReducers } from "redux";
import loginReducer from "./LoginModule";
import loadingReducer from "./LoadingModule";
import memberReducer from "./MemberModule";

const rootReducer = combineReducers({

    loadingReducer,
    loginReducer,
    memberReducer
});

export default rootReducer;