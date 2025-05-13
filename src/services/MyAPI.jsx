const fetchProjects = async () => {
    const data = await fetch(import.meta.env.VITE_API_PROJECT)
        .then(res => res.json())
        .then(data => {
            return data
        })

    return data
}
const fetchCertificate = async () => {
    const data = await fetch(import.meta.env.VITE_API_CERTIFICATE)
        .then(res => res.json())
        .then(data => {
            return data
        })

    return data
}
const fetchHero = async () => {
    const data = await fetch(import.meta.env.VITE_API_HERO)
        .then(res => res.json())
        .then(data => {
            return data
        })

    return data
}

export { fetchProjects, fetchCertificate, fetchHero }