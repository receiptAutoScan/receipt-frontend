import '../css/header.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem('jwtToken');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div className="header_dep_one">
            <div className="header_dep_two_center">
                <Link to="/">
                    <div className='logo'></div>
                </Link>
            </div>
            <div className="header_dep_two_right">
                <div className="header_dep_two_right_btn">
                    {isLoggedIn ? (
                        <>
                            <Link to="/info">
                                <div>
                                    <div className='info'></div>
                                    내 정보
                                </div>
                            </Link>
                            <Link to="/input">
                                <div>
                                    <div className='input'></div>
                                    자료 입력
                                </div>
                            </Link>
                            <Link to="/search">
                                <div>
                                    <div className='search'></div>
                                    자료 조회
                                </div>
                            </Link>
                            <Link>
                            <div onClick={handleLogout}>
                                <div className='logout'></div>
                                로그아웃
                            </div>
                            </Link>
                        </>
                    ) : (
                        <Link to="/login">
                            <div>
                                <div className='login'></div>
                                로그인
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
