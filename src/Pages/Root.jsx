
import { Outlet } from 'react-router-dom';
import Header from './Shared/Header';
import Footer from './Shared/Footer';

const Root = () => {
    return (
        <div className='px-2'>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;