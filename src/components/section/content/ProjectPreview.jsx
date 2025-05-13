import { useState, useRef, useEffect } from 'react'
import ProjectCardPreview from '@section/content/ProjectCardsPreview'
// import TAILWIND from '@assets/techstack/tailwind.svg'
// import EXPRESSJS from '@assets/techstack/expressjs.svg'
// import NODEJS from '@assets/techstack/nodejs.svg'
// import EJS from '@assets/techstack/ejs.svg'
// import JS from '@assets/techstack/javascript.svg'
// import REACT from '@assets/techstack/react.svg'
// import VITE from '@assets/techstack/vite.svg'
// import GIT from '@assets/techstack/git.svg'
// import PANDAS from '@assets/techstack/pandas.svg'
// import PY from '@assets/techstack/py.svg'
// import SNOWFLAKE from '@assets/techstack/snowflake.svg'
// import PSQL from '@assets/techstack/psql.svg'
// import LOOKER from '@assets/techstack/looker.svg'
// import DOCKER from '@assets/techstack/docker.svg'
// import AIRFLOW from '@assets/techstack/airflow.svg'
// import DBT from '@assets/techstack/dbt.svg'
// import BOOKBITES from '@assets/bookbites.png'
// import WEBPORTO from '@assets/web-portofolio.png'
// import ETL from '@assets/ETL.png'
// import ELT from '@assets/ELT.png'
// import BATCH from '@assets/batch-processing.jpg'

// const techStack = {
//   web: {
//     portofolio: [JS, TAILWIND, REACT, VITE],
//     bookBites: [JS, EJS, NODEJS, EXPRESSJS, PSQL],
//   },
//   data: {
//     ETL: [PY, PSQL, LOOKER],
//     ELT: [GIT, PANDAS, SNOWFLAKE, DBT, LOOKER],
//     batchProcessing: [PSQL, DOCKER, AIRFLOW, PANDAS, SNOWFLAKE, DBT, LOOKER],
//   },
// }
// const projects = [
//   {
//     image: BOOKBITES,
//     title: 'Book Bites',
//     description: "Book Notes is a full-stack web application designed to help avid readers organize and retain key insights from the non-fiction books they read. Users can record notes, rate books, track reading dates, and view book covers via the Open Library Covers API. The app offers a clean, user-friendly interface where books can be searched, sorted, updated, and deleted with ease.",
//     techStack: techStack.web.bookBites,
//     sourceCode: 'https://github.com/Ghifariezra/bookbites',
//     livePreview: 'https://bookbites.onrender.com',
//     category: 'Fullstack',
//     status: 'Individual: is not optimized for responsive'
//   },
//   {
//     image: WEBPORTO,
//     title: 'Portofolio Website',
//     description: "A personal portfolio website showcasing your professional profile as a Tech Generalist with a minimalist and responsive design. Features intuitive navigation, contact information, tech stack display, and 3D avatar. Built using modern web technologies to reflect your skills and experience in web development.",
//     techStack: techStack.web.portofolio,
//     sourceCode: 'https://github.com/Ghifariezra/portofolio-web',
//     livePreview: '/',
//     category: 'Frontend',
//     status: 'Individual'
//   },
//   {
//     image: ETL,
//     title: 'ETL',
//     description: "A data pipeline implementing standard Extract-Transform-Load processes for data processing. Utilizes Python for extracting and transforming data from various sources, then loading results into target databases. Includes interactive data visualizations to facilitate analysis and result presentation.",
//     techStack: techStack.data.ETL,
//     sourceCode: 'https://github.com/Ghifariezra/digitalskola-dataeng/tree/main/Project/etl-project',
//     category: 'Data',
//     status: 'Collaboration'
//   },
//   {
//     image: ELT,
//     title: 'ELT',
//     description: "A modern data pipeline implementing Extract-Load-Transform architecture with GitHub as the data source. The workflow extracts data from GitHub repositories, loads it into a data warehouse, and transforms it using dbt for analytics. Leverages Python and Snowflake for efficient data processing, with final results visualized through Looker Studio for interactive business intelligence.",
//     techStack: techStack.data.ELT,
//     sourceCode: 'https://github.com/Ghifariezra/digitalskola-dataeng/tree/main/Project/elt-project/elt-snowflake',
//     category: 'Data',
//     status: 'Collaboration'
//   },
//   {
//     image: BATCH,
//     title: 'Batch Processing',
//     description: "A containerized data pipeline solution for handling batch data processes. Utilizes Docker for containerization, PostgreSQL for data storage, and Airflow for workflow orchestration. Features a complete ETL cycle with dbt for data transformation and Looker Studio for visualization. Designed for scalable, maintainable data processing with modern cloud-native tooling.",
//     techStack: techStack.data.batchProcessing,
//     sourceCode: 'https://github.com/Ghifariezra/digitalskola-dataeng/tree/main/Project/airflow-dbt-docker',
//     category: 'Data',
//     status: 'Collaboration'
//   },
// ]

function ProjectPreview() {
  const catalog = ['All', 'Frontend', 'Fullstack', 'Data']
  const [seeMore, setSeeMore] = useState(false)
  const [active, setActive] = useState('All')
  const [projects, setProjectData] = useState([])

  // Filter project
  const filterProject = active === 'All' ? projects : projects.filter((item) => item.category === active)
  const lengthProject = active === 'All' ? projects.length : projects.filter((item) => item.category === active).length

  // Reference untuk scroll
  const lessRef = useRef(null)
  const handleSeeMore = () => {
    setSeeMore(seeMore => {
      return !seeMore
    })
  }

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch('https://rest-api-fjjx.onrender.com/api/cards')
      const data = await res.json()
      setProjectData(data)
    }

    getProjects()
  }, []) // Jalankan hanya saat pertama render

  useEffect(() => {
    // Scroll ke bawah
    if (seeMore) {
      lessRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [seeMore])

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
        {
          seeMore ? filterProject.map((item, index) => (
            <ProjectCardPreview key={index} {...item} />
          )) : filterProject.slice(0, 2).map((item, index) => (
            <ProjectCardPreview key={index} {...item} />
          ))
        }
      </div>
      {
        lengthProject > 2 && (
          <div className='field-more group'>
            {
              seeMore ? (
                <button
                  className='btn-more'
                  ref={lessRef} // Target scroll
                  onClick={handleSeeMore}
                >
                  See Less...
                </button>
              ) : (
                <button
                  className='btn-more'
                  onClick={handleSeeMore}
                >
                  See More...
                </button>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default ProjectPreview
