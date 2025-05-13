import LINKEDIN from '@assets/linkedin.png'
import TELEGRAM from '@assets/telegram.png'
import GIT from '@assets/techstack/git.svg'

const sosmed = [
    {
        name: 'Telegram',
        icon: TELEGRAM,
        url: import.meta.env.VITE_TELEGRAM,
    },
    {
        name: 'Linkedin',
        icon: LINKEDIN,
        url: import.meta.env.VITE_LINKEDIN,
    },
    {
        name: 'Github',
        icon: GIT,
        url: import.meta.env.VITE_GITHUB,
    },
]

function FooterComponents(){
    return(
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