import '../css/header.css';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <div className="header_dep_one">
            <div className="header_dep_two_center">
                <Link to="/">
                <div className='logo'>
                </div>
                </Link>
            </div>            
            <div className="header_dep_two_right">
                <div className="header_dep_two_right_btn">
                    <Link to="/info">
                        <div>
                            <div className='info'></div>
                            내 정보
                        </div>
                    </Link>
                    <Link to="/input">
                        <div >
                            <div className='input'></div>
                            자료 입력
                        </div>
                    </Link>
                    <Link to="/search">
                        <div >
                            <div className='search'></div>
                            자료 입력
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Header;