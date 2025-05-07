import { useState } from 'react'

function NavbarComponents() {
  const [items] = useState([
    { id: 1, name: 'About', href: '/' },
    { id: 2, name: 'Project', href: '#project' },
    { id: 3, name: 'Certificate', href: '/certificate' },
    { id: 4, name: 'Contact', href: '#contact' },
    { id: 5, name: 'Resume', href: '#' },
  ])

  return (
    <div className='li-menu'
    >{items.map((item, index) => (
      <div
        key={index}
        className='menu-item'>
        {item.name === 'Resume' ? (
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
