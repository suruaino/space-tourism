import logo from './logo.svg';
const Header = () => {
    return(
        <header>

            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <nav>
            <ul>
                <li><a href="#">00 Home</a></li>
                <li><a href="#"> 01 Destination</a></li>
                <li><a href="#">02 Crew</a></li>
                <li><a href="#">03 Technology</a></li>
            </ul>
            </nav>
    
        </header>
    )
}

export default Header;