import { useState } from 'react'
import GIT from '@assets/techstack/git.svg'
import iconCertificate from '@assets/certificate.png'

function ProjectCardPreview({ image, title, techStack, url, certificate }) {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="card-project" data-aos="fade-left">
            <div
                className="img-project group"
                style={{ backgroundImage: `url(${image})` }} data-aos="zoom-out" data-aos-delay="600"
            >
                <a href="/">
                    <div className="wrapper-preview">
                        <h1 className="text-preview">
                            <span className='bounce-preview'>👀</span> Live Preview
                        </h1>
                    </div>
                    {/* {isHover && (<div className='hover-certif' style={{ backgroundImage: `url(${certificate})` }}>
                    </div>)} */}
                </a>
            </div>
            <div className="wrapper-content-card">
                <div className='wrapper-source'>
                    <a href={url} target='_blank' className='group' data-aos="fade-left">
                        {/* <div style={{ backgroundImage: `url(${GIT})` }} className='hover-git'>
                        </div> */}
                        <h1 className='text-sky-700 text-[9px] sm:text-sm underline font-bold'>Source Code</h1>
                    </a>
                    {/* <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={{ backgroundImage: `url(${iconCertificate})` }} className='trigger-certif' data-aos="fade-left">
                    </div> */}
                </div>
                <h1 className="head-card" data-aos="fade-left">{title}</h1>
                <hr className="head-line" data-aos="fade-left" />
                <h2 className="head-stack" data-aos="fade-left">Tech Stack</h2>
                <div className="wrapper-stack">
                    {techStack.map((item, index) => (
                        <img key={index} src={item} alt={`Tech ${index}`} className="ratio-stack" data-aos="fade-left" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCardPreview