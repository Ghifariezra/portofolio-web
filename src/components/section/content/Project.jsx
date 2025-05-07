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
        <div className='mx-4 my-6 sm:mx-6 md:mx-8 lg:my-10 xl:my-12 2xl:my-16'>
            <div className='flex justify-center my-6 w-fit mx-auto px-8 py-2 bg-sky-400/50 rounded-lg drop-shadow-sm origin-top-left rotate-4 transition-all duration-300 ease-in' data-aos="fade-up">
                <h1 className='text-center text-white text-xl lg:text-3xl 2xl:text-4xl font-bold font-project tracking-wider'>My Project</h1>
            </div>
            <div className='grid gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
