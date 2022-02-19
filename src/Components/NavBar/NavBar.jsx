import './NavBar.sass';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className="navbar_title_container">
                <div className="navbar_title">Bhromaon</div>
            </div>
            <div className="navbar_items_container">
            <div className="navbar_items">
                <div className="nav_item">Who We Are</div>
                <div className="nav_item">What We Do</div>
                <div className="nav_item">Travel With Us</div>
                <div className="nav_item">Contact Us</div>
            </div>
            </div>
        </div>
    )
};

export default NavBar;