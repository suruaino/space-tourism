import logo from './header-assets/logo.svg';
import "./header.css";
const Header = () => {
    return(
        <header>

            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <nav>
            <ul>
                <li><a href="#"><span>00</span> Home</a></li>
                <li><a href="#"><span>01</span> Destination</a></li>
                <li><a href="#"><span>02</span> Crew</a></li>
                <li><a href="#"><span>03</span> Technology</a></li>
            </ul>
            </nav>
    
        </header>
    )
}

export default Header;