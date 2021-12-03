import { useState } from "react"

export default function Review (){
    
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    
    const handleSubmit = async () 
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
            <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
       <button type="submit">Submit to the Void</button>

            </form>
        </div>
    )
}