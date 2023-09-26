import { LOADING } from "../../modules/LoadingModule";
import { IS_SIGNUP } from "../../modules/LoginModule";

export const callKakaoLoginAPI = (code) => {

    const requestURL = 'http://localhost:8080/api/v1/login/kakaocode';

    return async (dispatch, getState) => {

        dispatch({ type: LOADING, payload: true});

        let data = {code: code}
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*' 
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
        
        if(result.httpStatus === 200) {
            
            window.localStorage.setItem('jwtToken', JSON.stringify(result.results.token));
            dispatch({type: IS_SIGNUP});

            setTimeout(function () {
                dispatch({ type: LOADING, payload: false});
            }, 500);
        }
    };
}

