import "./Header.css";

function Header() {
    return (
      <>
        <div className="header">
          <a href="#default" className="logo">
            Matt's website!
          </a>
          <div className="headerRight">
            <a href="/">Home</a>
            <a href="/hobbies">Hobbies</a>
          </div>
        </div>
      </>
    );
}

export default Header;