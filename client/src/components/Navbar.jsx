import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="nav">
      <Link class="text-dark" to="/">
        The Void
      </Link>
      <ul class="nav justify-content-end" className="submitlink">
        <li class="nav-item">
          <Link class="text-dark" to="/new">
            Submit New Movie
          </Link>
        </li>
      </ul>
    </div>
  );
}
