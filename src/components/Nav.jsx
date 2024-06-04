import {Link, useLocation} from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                        Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/About" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;
