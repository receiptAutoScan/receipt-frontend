import { createActions, handleActions} from 'redux-actions';

const initailState = false;

export const IS_SIGNUP = 'IS_SIGNUP';

const actions = createActions({
    [IS_SIGNUP]: () => { }
});

const loginReducer = handleActions({
    [IS_SIGNUP]: () => {
        return !initailState;
    }}, initailState
);

export default loginReducer;