import Header from '../components/Header';
import Main from '../pages/RealMain';
import {Outlet} from 'react-router-dom';
import '../css/reset.css'
function Layout() {

    return (
        <>
            <Header/>
            <Main/>
            <Outlet/>
        </>
    );
}

export default Layout;