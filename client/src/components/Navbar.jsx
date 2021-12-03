import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
      <div>
        <Link to='/'>The Void</Link>
        <Link to='/new'>Submit New Movie</Link>
      </div>
    )
  }