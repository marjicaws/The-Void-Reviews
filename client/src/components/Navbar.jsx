import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
      <div class="p-3 mb-2 bg-light text-dark" className = "nav">
        <Link class="text-dark" to='/'>The Void</Link>
        <Link class="text-dark" to='/new'>Submit New Movie</Link>

        
      </div>
    )
  }