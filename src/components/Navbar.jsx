import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-900">
            <img src="" alt="logo" />
            <ul className="nav__list">
                <li className="nav__link"><Link to="#">Home</Link></li>
                <li className="nav__link"><Link to="#">About</Link></li>
                <li className="nav__link"><Link to="#">Movies</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
