import { useState, useRef, useEffect } from 'react'
import ProjectCardPreview from '@section/content/ProjectCardsPreview'

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
      const res = await fetch(import.meta.env.VITE_API_PROJECT)
      const data = await res.json()
      setProjectData(data)
    }

    getProjects()
  }, [])

  useEffect(() => {
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
