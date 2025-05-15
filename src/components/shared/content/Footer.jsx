import { useState, useEffect } from 'react'
import { fetchHero } from '@services/MyAPI'

function FooterComponents() {
    const [sosmed, setSosmed] = useState([]);

    const getHero = async () => {
        try {
            const hero = await fetchHero()
            setSosmed(hero.socialMedia)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getHero()
    }, [])
 
    return (
        <div className='footer-component'>
            <h1 className="copyright">@GhifariEzraRamadhan</h1>
            <div className='footer-sosmed'>
                {sosmed.map((sosmed, index) => (
                    <a key={index} href={sosmed.url} target="_blank" rel="noopener noreferrer">
                        <img src={sosmed.icon} alt={sosmed.name} className="footer-social-media" />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default FooterComponents