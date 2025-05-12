import GIT from '@assets/techstack/git.svg'
import PREVIEW from '@assets/search.png'

function ProjectCardPreview({ image, title, description, techStack, sourceCode, livePreview, status }) {
    return (
        <div className="card-project" data-aos="fade-left">
            <div className='group'>
                <div
                    className="img-project group"
                    style={{ backgroundImage: `url(${image})` }} data-aos="zoom-out" data-aos-delay="600"
                >
                    <div className='status-project'>
                        <div className='status'>
                            {status}
                        </div>
                    </div>
                    {
                        livePreview ? (
                            <a href={livePreview} target='_blank'>
                                <div className="wrapper-preview">
                                    <h1 className="text-preview">
                                        <span className='bounce-preview'>
                                            <img src={PREVIEW} alt="" className='hover-git' />
                                        </span> Live Preview
                                    </h1>
                                </div>
                            </a>
                        ) : (
                            <a href={sourceCode} target='_blank'>
                                <div className="wrapper-preview">
                                    <h1 className="text-preview">
                                        <span className="bounce-preview">
                                            <img src={GIT} alt="" className='hover-git' />
                                        </span> Source Code
                                    </h1>
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>
            <div className="wrapper-content-card">
                <h1 className="head-card" data-aos="fade-left">{title}</h1>
                <h1 className="description" data-aos="fade-left">{description}</h1>
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