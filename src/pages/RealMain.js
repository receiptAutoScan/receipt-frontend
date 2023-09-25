import '../css/Main.css';


function Main(){
    return (
        <div className="Main_dep_one">
            <div className='Main_banner'>
                <h2>
                "자영업의 도우미, 영수증 스캔으로<br/>
                지출/매출 한방에! 정확하고 편리한<br/>
                재무 관리를 경험하세요."
                </h2>
            </div>
            <div className='Main_dep_ment'>
                <div className='first_ment'>
                    <div className='ment_img_1'></div>
                    <div className='first_ment_p'><p>재무 관리에 고민이라면?<br/>여기서 해결하세요!</p></div>
                </div>
                <hr/>
                <div className='first_ment'>                    
                    <div className='first_ment_p'><p>재무 관리에 고민이라면?<br/>여기서 해결하세요!</p></div>
                    <div className='ment_img_2'></div>
                </div>
            </div>
        </div>
    )
}
export default Main;