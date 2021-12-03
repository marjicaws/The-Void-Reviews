// CRUD REQUESTS HERE

import axios from "axios"

export const BASE_URL = `https://api.airtable.com/v0/${process.env.HORROR_REVIEWS_AIRTABLE_BASE}/horror`
export const config = {
    headers: {
        Authorization: `Bearer ${process.env.HORROR_REVIEWS_AIRTABLE_KEY}`
    }
}

export const grabHorror = async () => {
    const res = await axios.get(BASE_URL, config)
    return res.data
}
