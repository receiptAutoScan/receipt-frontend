import { GET_MEMBER } from "../../modules/MemberModule";
import { LOADING } from "../../modules/LoadingModule";

export const getMembers = async () => {

    const token = window.localStorage.getItem('jwtToken');

    const requestURL = 'http://localhost:8080/api/v1/members'

    const result = await fetch(requestURL, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*',
            "Auth": token
        }
    }).then(res => res.json());
}

export const getCurrentMember = () => {

    const token = window.localStorage.getItem('jwtToken');

    const requestURL = 'http://localhost:8080/api/v1/members/auth'

    return async (dispatch, getState) => {

        dispatch({ type: LOADING, payload: true});

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*',
                "Auth": token
            }
        }).then(res => res.json());

        if (result.httpStatus === 200) {

            dispatch({ type: GET_MEMBER, payload: result.results.member });

            if(result.results.member.nickname.startWith("새로운회원")) {
                dispatch({type :OPEN_NICKNAME});
            }

            setTimeout(function () {
                dispatch({ type: LOADING, payload: false});
            }, 300);
        }
    };
}

