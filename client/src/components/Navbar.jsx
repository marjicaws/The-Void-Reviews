import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
    <div className="nav">
      <Link class="text-dark" to="/">
        The Void
      </Link>
      <ul class="nav justify-content-end" >
        <li class="nav-item">
          <Link class="text-dark" className="submitlink" to="/new">
            Submit New Movie
          </Link>
        </li>
      </ul>
    </div>
    </nav>
  );
}
