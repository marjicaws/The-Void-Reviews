import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
      <div className = "nav">
        <Link to='/'>The Void</Link>
        <Link className="submitlink" to='/new'>Submit New Movie</Link>

        <h4>Looking for a horror movie to watch tonight but you aren’t sure if its any good?
Consult the Void! Our knowledge is infinite. We of many names believe that we are 
all one within the void so add your own rating, reviews, and even movies!</h4>
      </div>
    )
  }