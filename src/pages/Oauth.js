import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callKakaoLoginAPI } from "../apis/login/LoginAPICalls";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../components/commons/Loading';

function Oauth() {

    const code = new URL(window.location.href).searchParams.get('code');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loading = useSelector(state => state.loadingReducer);

    useEffect(
        () => {
            alert("dddd")
            dispatch(callKakaoLoginAPI(code));
        }
    )
    
    if(!loading) {
        return navigate("/", {replace: true});
    }

    return (
        <>
            <div style={{height: '100wh'}}>
                {loading && <Loading />}
            </div>
        </>
    )

}


export default Oauth;