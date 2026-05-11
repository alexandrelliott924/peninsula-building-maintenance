import '../styles/header.css';
import Nav from './nav';
import PBMLogo from '../assets/PBM-logo.png';

function Header() {

    return (
        <div className='header'>
            <img src={PBMLogo} alt='PBM logo' className='PBM-logo' />
            <Nav />
        </div>
    )
}

export default Header