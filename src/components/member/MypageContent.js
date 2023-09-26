import { useDispatch, useSelector } from 'react-redux';
import style from '../../css/Mypage.module.css';
import profileImg from '../../img/profile.png';
import kakaoLogo from '../../img/Kakao_logo.jpg';

function MypageContent() {

    const dispatch = useDispatch();

    const member = useSelector(state => state.memberReducer);

    function SocialIcon() {

        if (member?.socialLogin === "KAKAO") {
            return <img src={kakaoLogo} alt='kakao logo' width={'40px'} height={'40px'}/>
        }
    }



    return(
    <div className={style.container}>
        <div className={style.Profile}>
            <img src={SocialIcon}></img>
        </div>
        <div className={style.SocialId}>
            <label className={style.label1}>계정</label><label className={style.input1}>{member?.socialLogin}</label>
        </div>
        <div className={style.Button}>
            <button className={style.Btn1}>회원탈퇴</button>
        </div>
    </div>
    );
}

export default MypageContent;