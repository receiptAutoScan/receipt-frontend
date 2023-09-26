import Header from '../components/Header';
import Main from '../pages/RealMain';
import ChatbotComponent from '../components/ChatbotComponent';
import {Outlet} from 'react-router-dom';
import '../css/reset.css'
function Layout() {

    return (
        <>
            <Header/>
            <Main/>
            <ChatbotComponent/>
            <Outlet/>
        </>
    );
}

export default Layout;