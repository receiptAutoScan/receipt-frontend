import '../css/header.css';


function Header(){
    return (
        <div className="header_dep_one">
            <div className="header_dep_two_center">
                <div className='logo'>
                </div>
            </div>            
            <div className="header_dep_two_right">
                <div className="header_dep_two_right_btn">
                    <div >
                        <div className='info'></div>
                        내 정보
                    </div>
                    <div >
                        <div className='input'></div>
                        자료 입력
                    </div>
                    <div >
                        <div className='search'></div>
                        자료 조회
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;