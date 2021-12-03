// CRUD REQUESTS HERE

const BASE = process.env.HORROR_REVIEWS_AIRTABLE_BASE

const BASE_URL = `https://api.airtable.com/v0/${BASE}/horror`
const config = {
    headers: {
        Authorization: `Bearer ${process.env.HORROR_REVIEWS_AIRTABLE_KEY}`
    }
}

