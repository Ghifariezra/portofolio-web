import { cache } from 'react'

const fetchProjects = cache(async () => {
    const data = await fetch(import.meta.env.VITE_API_PROJECT)
        .then(res => res.json())
        .then(data => {
            return data
        })
    return data
})
const fetchCertificate = cache(async () => {
    const data = await fetch(import.meta.env.VITE_API_CERTIFICATE)
        .then(res => res.json())
        .then(data => {
            return data
        })
    return data
})
const fetchHero = cache(
    async () => {
        const data = await fetch(import.meta.env.VITE_API_HERO)
            .then(res => res.json())
            .then(data => {
                return data
            })
        return data
    }
);

const fetchQuotes = cache(
    async () => {
        const data = await fetch(import.meta.env.VITE_API_QUOTES)
            .then(res => res.json())
            .then(data => {
                return data
            })
        return data
    }
)

export { fetchProjects, fetchCertificate, fetchHero, fetchQuotes }