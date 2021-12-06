// CRUD REQUESTS HERE

import axios from "axios"

export const BASE_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_HORROR_AIRTABLE_BASE}/horror`
export const REV_URL=`https://api.airtable.com/v0/${process.env.REACT_APP_HORROR_AIRTABLE_BASE}/reviews`
export const config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_HORROR_AIRTABLE_KEY}`
    }
}

export const grabHorror = async () => {
    const res = await axios.get(BASE_URL, config)
    return res.data
}

export const grabReview = async () => {
    const res = await axios.get(REV_URL, config)
    return res.data
}

export const postHorror = async (body) => {
    const res = await axios.post(BASE_URL, {fields: body}, config)
    return res.data
}

export const postReview = async (body) => {
    const res = await axios.post(REV_URL, {fields: body}, config)
    return res.data
}

export const deleteReview = async () => {
    const res = await axios.delete(REV_URL, config)
    
}
