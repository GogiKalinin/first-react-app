import "./NavBar.sass";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="navbar_title_container">
        <div className="navbar_title">Bhromaon</div>
      </div>
      <div className="navbar_items_container">
        <div className="navbar_items">
          <a href="#about" className="nav_item">
            Who We Are
          </a>
          <a href="#" className="nav_item">
            What We Do
          </a>
          <a href="#book" className="nav_item">
            Travel With Us
          </a>
          <a href="#footer" className="nav_item">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
