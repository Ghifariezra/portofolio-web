import ProjectCard from '@section/content/ProjectCards'
import DE_CERTIFICATE from '@assets/DE-Certificate.png'
import TAILWIND from '@assets/tailwind.svg'
import JS from '@assets/javascript.svg'
import REACT from '@assets/react.svg'
import VITE from '@assets/vite.svg'
import WEBPORTO from '@assets/web-portofolio.png'

const techStackWebPortofolio = [JS, TAILWIND, REACT, VITE]
const projects = [
    {
        image: WEBPORTO,
        title: 'Portofolio Website',
        techStack: techStackWebPortofolio,
        url: 'https://github.com/Ghifariezra',
        certificate: DE_CERTIFICATE,
    },
    {
        image: WEBPORTO,
        title: 'Portofolio Website',
        techStack: techStackWebPortofolio,
        url: 'https://github.com/Ghifariezra',
        certificate: DE_CERTIFICATE,
    },
    {
        image: WEBPORTO,
        title: 'Portofolio Website',
        techStack: techStackWebPortofolio,
        url: 'https://github.com/Ghifariezra',
        certificate: DE_CERTIFICATE,
    },
    {
        image: WEBPORTO,
        title: 'Portofolio Website',
        techStack: techStackWebPortofolio,
        url: 'https://github.com/Ghifariezra',
        certificate: DE_CERTIFICATE,
    },
]

function ProjectComponents() {
    return (
        <div className='project-content'>
            <div className='head-project' data-aos="fade-up">
                <h1 className='text-project'>Project Preview</h1>
            </div>
            <div className='wrapper-card'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        techStack={project.techStack}
                        url={project.url}
                        cert={project.certificate}
                    />
                ))}

            </div>
        </div>
    )
}

export default ProjectComponents
