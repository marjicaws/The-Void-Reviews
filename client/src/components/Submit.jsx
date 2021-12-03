import { useState } from "react"

export default function Submit () {
    const [movie, setMovie] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [imgURL, setImgUrl] = useState('')
    return (
        <div>
            <form>
                <input value={'text'} onChange={(e) => setMovie(e.target.value)}/>
                <input value={'text'} onChange={(e) => setSynopsis(e.target.value)}/>
                <input value={'url'} onChange={(e) => setImgUrl(e.target.value)}/>
            </form>
        </div>
    )
}