import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    
    <nav className='nav'>
      <div className="nav-title-box">
        <Link class="text-dark" className="nav-title" to="/">
          The Void
        </Link>
        </div>
        <div className='nav-links'>

            <Link class="text-dark" className="nav-link1" to="/new">
              Submit New Movie
            </Link>

            <Link class="text-dark" className="nav-link2" to="/about">
              About
            </Link>

        </div>
    
    </nav>
    
  );
}
