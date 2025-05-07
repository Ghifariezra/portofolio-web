import { useState } from 'react'
import GIT from '@assets/git.svg'
import CERTIFICATE from '@assets/certificate.png'

function ProjectCard({ image, title, techStack, url, cert }) {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="w-full bg-white p-4 rounded-lg drop-shadow-sm" data-aos="fade-left">
            <div
                className="w-full h-60 bg-center bg-cover hover:drop-shadow-sky-400/25 hover:drop-shadow-xl hover:-translate-y-4 hover:scale-110 transition-all duration-300 ease-in rounded-2xl overflow-hidden relative group"
                style={{ backgroundImage: `url(${image})` }} data-aos="zoom-out" data-aos-delay="600"
            >
                <a href="/">
                    <div className="absolute inset-0 flex items-center justify-center hover:bg-gradient-to-t from-sky-300/95 via-transparent to-transparent transition-all lg:duration-300">
                        <h1 className="hidden group-hover:block px-3 py-1 bg-sky-800/50 rounded-lg text-white text-center text-lg md:text-xl font-bold animate-pulse">
                            <span className='inline-block animate-bounce'>👀</span> Live Preview
                        </h1>
                    </div>
                    { isHover && (<div className='lg:absolute lg:inset-0 lg:bg-center lg:bg-contain lg:rounded-2xl lg:scale-115' style={{ backgroundImage: `url(${cert})` }}>
                    </div>)}
                </a>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <div className='hidden lg:flex lg:gap-4 lg:justify-center'>
                    <a href={url} target='_blank' className='group' data-aos="fade-left">
                        <div style={{ backgroundImage: `url(${GIT})` }} className='w-4 h-4 bg-center bg-cover md:group-hover:scale-110 md:group-hover:opacity-75 transition-all duration-300 ease-in:'>
                        </div>
                    </a>
                    <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={{ backgroundImage: `url(${CERTIFICATE})` }} className='w-4 h-4 scale-110 bg-center bg-cover md:hover:scale-130 md:hover:opacity-75 transition-all duration-300 ease-in cursor-pointer' data-aos="fade-left">
                    </div>
                </div>
                <h1 className="text-sky-700 text-base sm:text-lg md:text-xl font-bold tracking-wider break-words" data-aos="fade-left">{title}</h1>
                <hr className="border-slate-300" data-aos="fade-left"/>
                <h2 className="text-sky-700/50 text-sm tracking-wider" data-aos="fade-left">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((item, index) => (
                        <img key={index} src={item} alt={`Tech ${index}`} className="w-6 h-6" data-aos="fade-left" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard