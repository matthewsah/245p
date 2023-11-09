import "./Header.css";

function Header() {
    return (
      <>
        <div className="header">
          <a href="#default" className="logo">
            Matt's website!
          </a>
          <div className="headerRight">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </>
    );
}

export default Header;