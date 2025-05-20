import { cache } from 'react'

const QuotesAPI = import.meta.env.VITE_QUOTES_API;

async function fetchData() {
    cache(async () => {
        const data = await fetch(QuotesAPI)
            .then(res => res.json())
            .then(data => {
                return data
            }).catch(error => {
                console.error('Error fetching data:', error);
                return null; // or handle the error as needed
            })
        if (!data) {
            throw new Error('Failed to fetch data');
        }
        return data
    })()
}

export default fetchData;