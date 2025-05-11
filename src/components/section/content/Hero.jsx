import { useState, useEffect, useRef } from 'react'
import Form from '@components/form/Form'
import PROFILE3D from '@assets/avatar-profile.png'
import LINKEDIN from '@assets/linkedin.png'
import TELEGRAM from '@assets/telegram.png'
import GIT from '@assets/techstack/git.svg'
import TAILWIND from '@assets/techstack/tailwind.svg'
import JS from '@assets/techstack/javascript.svg'
import REACT from '@assets/techstack/react.svg'
import VITE from '@assets/techstack/vite.svg'

const skills = [JS, REACT, TAILWIND, VITE];
const socialMedia = [
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
    url: 'https://github.com/Ghifariezra',
  },
];

function HeroComponents() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Jika modal terbuka dan klik di luar form/modal box, tutup
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div
      className='hero-content'>
      <div
        data-aos="flip-up"
        className='hero-image group'>
        <img src={PROFILE3D} alt="profile" className=' profile' />
        <div className='profile-gradient'></div>
        <div className='profile-overlay'>
          <h3 className='profile-name'>Ghifari Ezra Ramadhan</h3>
          <p className='profile-role'>Fullstack & Data Enthusiast</p>
        </div>
      </div>

      <div
        className='hero-text'>
        <div className='wrapper-skills flex flex-row gap-4 px-4 pt-4'>
          {
            socialMedia.map((item, index) => (
              <a href={item.url} key={index} target="_blank">
                <img className='social-media w-6 h-6' src={item.icon} alt={item.name} />
              </a>
            ))
          }
        </div>
        <h1
          className='text-greeting group'>
          Hi, I'm <span data-aos='zoom-in' className='full-name'>Ghifari Ezra Ramadhan</span> <span data-aos='fade-up' className='waving-hand'>👋</span> <br /> a <span data-aos='fade-left' className='role hidden'>Fullstack Web Developer</span><span data-aos='fade-left' className='role'>Tech Generalist</span>
        </h1>
        <hr className='hero-line' />
        <p
          className='text-description' data-aos="flip-up">
          I'm a university student at Universitas Pancasila, currently exploring the world of full-stack web development. With a strong passion for technology, I’m committed to continuous learning and building digital solutions that are both efficient and meaningful. I believe that technology is not just a tool, but a bridge to solving real-world problems. I’m always open to collaboration, innovation, and new challenges in the web development space.
        </p>
        <div className='field-message group'>
          <button
            data-aos="flip-up"
            className='btn-message'
            onClick={toggleModal}>
            Let's Disscussion <span className='envelope'>📩</span>
          </button>
        </div>
        {isOpen && (
          <div className='wrapper-modal'>
            <div ref={modalRef}>
              <Form closeModal={toggleModal} />
            </div>
          </div>
        )}
      </div>
      <div className='skills'>
        <h1 className='tech-stack' data-aos="flip-up">Tech Stack</h1>
        {skills.map((skill, index) => (
          <img
            data-aos="flip-up"
            key={index}
            src={skill}
            alt={skill}
            className='skill' />
        ))
        }
      </div>
      {/* <hr /> */}
    </div>
  )
}

export default HeroComponents