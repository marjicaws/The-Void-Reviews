import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
      <div className = "nav">
        <Link to='/'>The Void</Link>
        <Link className="submitlink" to='/new'>Submit New Movie</Link>

        
      </div>
    )
  }