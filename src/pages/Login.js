import style from '../css/Login.module.css';
import kakaoLoginImg from '../img/kakao_login_large_wide.png';
import mainImg from '../img/mainImg.png';
const KAKAO_REST_API_KEY = "3648db810f8f9eaf95065298a719a4f8";
const KAKAO_REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;


const loginHandler = (platform) => {

    switch(platform) {
        case 'K':
            window.location.href = KAKAO_AUTH_URI;
            break;
    }
}

function Login() {

  return (
    <main className={style.Container}>
  <div>
    <h1 className={style.h1}>영 秀 증</h1>
    <div className={style.Buttons}>
      <div>
        <img src={mainImg}/>

      </div>
        <img className={style.loginbtn} onClick={() => loginHandler('K')} src={kakaoLoginImg}/>     
    </div>
  </div>
</main>


  );
}

export default Login;
