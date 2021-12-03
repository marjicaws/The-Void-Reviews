import { Link } from "react-router-dom"

import { useState } from 'react'

export default function Home (props) {
    const [movieData, setMovieData] = useState([])

    return (
        <div>
        {movieData.map(md => (
          <Link to={`/detail/${md.id}`}><img src = {md.fields.imgURL}/></Link>
        ))}
      </div>
    )
}