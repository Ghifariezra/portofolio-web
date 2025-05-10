import { useState } from 'react'
import ProjectCardPreview from '@section/content/ProjectCardsPreview'
import TAILWIND from '@assets/techstack/tailwind.svg'
import JS from '@assets/techstack/javascript.svg'
import REACT from '@assets/techstack/react.svg'
import VITE from '@assets/techstack/vite.svg'
import GIT from '@assets/techstack/git.svg'
import PANDAS from '@assets/techstack/pandas.svg'
import PY from '@assets/techstack/py.svg'
import SNOWFLAKE from '@assets/techstack/snowflake.svg'
import PSQL from '@assets/techstack/psql.svg'
import LOOKER from '@assets/techstack/looker.svg'
import DOCKER from '@assets/techstack/docker.svg'
import AIRFLOW from '@assets/techstack/airflow.svg'
import DBT from '@assets/techstack/dbt.svg'
import DE_CERTIFICATE from '@assets/DE-Certificate.png'
import FE_CERTIFICATE from '@assets/web-portofolio.png'
import ETL from '@assets/ETL.png'
import ELT from '@assets/ELT.png'
import BATCH from '@assets/batch-processing.jpg'

const techStack = {
  web: [JS, TAILWIND, REACT, VITE],
  data: {
    ETL: [PY, PSQL, LOOKER],
    ELT: [GIT, PANDAS, SNOWFLAKE, DBT, LOOKER],
    batchProcessing: [PSQL, DOCKER, AIRFLOW, PANDAS, SNOWFLAKE, DBT, LOOKER],
  },
}

const projects = [
  {
    image: FE_CERTIFICATE,
    title: 'Portofolio Website',
    techStack: techStack.web,
    sourceCode: 'https://github.com/Ghifariezra/portofolio-web',
    livePreview: '/',
    certificate: DE_CERTIFICATE,
    category: 'Web',
    status: 'Personal'
  },
  {
    image: ETL,
    title: 'ETL',
    techStack: techStack.data.ETL,
    sourceCode: 'https://github.com/Ghifariezra/digitalskola-dataeng/tree/main/Project/etl-project',
    certificate: DE_CERTIFICATE,
    category: 'Data',
    status: 'Team'
  },
  {
    image: ELT,
    title: 'ELT',
    techStack: techStack.data.ELT,
    sourceCode: 'https://github.com/Ghifariezra/digitalskola-dataeng/tree/main/Project/elt-project/elt-snowflake',
    certificate: DE_CERTIFICATE,
    category: 'Data',
    status: 'Team'
  },
  {
    image: BATCH,
    title: 'Batch Processing',
    techStack: techStack.data.batchProcessing,
    sourceCode: 'https://github.com/Ghifariezra/digitalskola-dataeng/tree/main/Project/airflow-dbt-docker',
    certificate: DE_CERTIFICATE,
    category: 'Data',
    status: 'Team'
  },
]
function ProjectPreview() {
  const catalog = ['Web', 'All', 'Data']
  const [seeMore, setSeeMore] = useState(false)
  const [active, setActive] = useState('All')
  const filterProject = active === 'All' ? projects : projects.filter((item) => item.category === active)

  const handleSeeMore = () => {
    setSeeMore(!seeMore)
  }

  return (
    <div className="project-content">
      <div className="head-project" data-aos="fade-up">
        <h1 className="text-project">Projects</h1>
      </div>

      <div className="category-project">
        {catalog.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(item)}
            className={`category-item
              ${active === item
                ? 'bg-sky-500 text-white font-bold'
                : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white'
              }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="wrapper-card">
        {/* {filterProject.map((item, index) => (
          <ProjectCardPreview key={index} {...item} />
        ))} */}
        {/* {
          projects.length > 3 ? projects.slice(0, 3).map((item, index) => (
            <ProjectCardPreview key={index} {...item} />
          )) : projects.map((item, index) => (
            <ProjectCardPreview key={index} {...item} />
          ))
        } */}
        {
          seeMore ? filterProject.map((item, index) => (
            <ProjectCardPreview key={index} {...item} />
          )) : filterProject.slice(0, 2).map((item, index) => (
            <ProjectCardPreview key={index} {...item} />
          ))
        }
      </div>
      <div className='field-more group'>
        <button 
          className='btn-more'
          onClick={handleSeeMore}
        >
          See More
        </button>
      </div>
    </div>
  )
}

export default ProjectPreview
