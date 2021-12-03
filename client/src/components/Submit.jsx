import { useState } from "react"

export default function Submit () {
    const [movie, setMovie] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [imgURL, setImgUrl] = useState('')
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'value={movie} onChange={(e) => setMovie(e.target.value)}/>
                <input type='text' value={synopsis} onChange={(e) => setSynopsis(e.target.value)}/>
                <input type='url' value={imgURL} onChange={(e) => setImgUrl(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}