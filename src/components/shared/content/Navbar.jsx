import { useState } from 'react'
const RESUME = import.meta.env.VITE_RESUME
const Contact = import.meta.env.VITE_CONTACT

function NavbarComponents() {
  const [items] = useState([
    { id: 1, name: 'About', href: '/' },
    { id: 2, name: 'Certificate', href: '/certificate' },
    { id: 3, name: 'Resume', href: RESUME },
    { id: 4, name: 'Contact', href: Contact },
  ])

  return (
    <div className='li-menu'
    >{items.map((item, index) => (
      <div
        key={index}
        className='menu-item'>
        {item.name === 'Resume' || item.name === 'Contact' ? (
          <a
            href={item.href}
            className='text-item'
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        ) :
          <a
            key={index}
            href={item.href}
            className='text-item'>
            {item.name}
          </a>
        }
      </div>
    ))}
    </div>
  )
}

export default NavbarComponents
