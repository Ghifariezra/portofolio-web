import { useState, useEffect, useRef } from 'react'
import Form from '@components/form/Form'
import PROFILE from '@assets/profile.jpeg'
import PROFILE3D from '@assets/avatar-profile.png'
import TAILWIND from '@assets/tailwind.svg'
import JS from '@assets/javascript.svg'
import REACT from '@assets/react.svg'
import VITE from '@assets/vite.svg'

const skills = [JS, REACT, TAILWIND, VITE];

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
        <h1
          className='text-greeting group'>
          Hi, I'm <span data-aos='</div>zoom-in' className='full-name'>Ghifari Ezra Ramadhan</span> <span data-aos='fade-up' className='waving-hand'>👋</span> <br /> a <span data-aos='fade-left' className='role hidden'>Fullstack Web Developer</span><span data-aos='fade-left' className='role'>Tech Generalist</span>
        </h1>
        <hr className='hero-line' />
        <p
          className='text-description' data-aos="flip-up">
          I'm a university student at Universitas Pancasila, currently exploring the world of full-stack web development. With a strong passion for technology, I’m committed to continuous learning and building digital solutions that are both efficient and meaningful. I believe that technology is not just a tool, but a bridge to solving real-world problems. I’m always open to collaboration, innovation, and new challenges in the web development space.
        </p>
        <button
          data-aos="flip-up"
          className='btn-message group'
          onClick={toggleModal}>
          Send message <span className='envelope'>📩</span>
        </button>
        {isOpen && (
          <div className='fixed inset-0 z-50 bg-sky-800/50 flex items-center justify-center'>
            <div ref={modalRef}>
              <Form />
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