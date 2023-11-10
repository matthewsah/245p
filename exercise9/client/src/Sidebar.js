import './Sidebar.css'

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">Home</Link>
        <Link to="hobbies">Hobbies</Link>
      </div>
    </>
  );
}

export default Sidebar;