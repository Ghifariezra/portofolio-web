import { useState } from 'react'

function Project() {
    const menu = ['All', 'Web', 'Data']
    const [selected, setSelected] = useState(menu[0])
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(prev => !prev)
    }

    const handleSelect = (item) => {
        setSelected(item)
        setIsOpen(false)
    }

    return (
        <div className='relative mx-4 my-6 sm:mx-6 md:mx-8 lg:my-10 xl:my-12 2xl:my-16'>
            <h1>Project</h1>

            {/* Dropdown header */}
            <div
                className='flex justify-between items-center bg-white rounded-lg px-4 py-2 cursor-pointer drop-shadow-sm'
                onClick={toggleDropdown}
            >
                <span className='text-sm md:text-base lg:text-lg font-normal text-sky-800'>{selected}</span>
                <span className='material-symbols-outlined'>
                    arrow_drop_down
                </span>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <ul className='absolute z-1 mt-1 w-full bg-white rounded-lg shadow overflow-hidden text-center'>
                    {menu.map((item, index) => (
                        <li
                            key={index}
                            className={`px-4 py-2 hover:bg-sky-200 cursor-pointer text-sm md:text-base ${selected === item ? 'text-sky-700 font-semibold' : ''
                                }`}
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            {/* Content Project */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
                <div className='bg-white rounded-lg p-4'>
                    <h1>Project 1</h1>
                </div>
                {/* <div className='bg-white rounded-lg p-4'>
                    <h1>Project 1</h1>
                </div>
                <div className='bg-white rounded-lg p-4'>
                    <h1>Project 1</h1>
                </div>
                <div className='bg-white rounded-lg p-4'>
                    <h1>Project 1</h1>
                </div> */}
            </div>

        </div>
    )
}

export default Project
