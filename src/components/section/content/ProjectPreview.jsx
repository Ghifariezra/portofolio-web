import { useState, useRef, useEffect } from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ProjectCardPreview from '@section/content/ProjectCardsPreview'
import { fetchProjects } from '@services/MyAPI'

function ProjectPreview() {
  const catalog = ['All', 'Frontend', 'Fullstack', 'Backend', 'Data']
  const [seeMore, setSeeMore] = useState(false)
  const [active, setActive] = useState('All')
  const [projects, setProjectData] = useState([])
  const [dropdown, setDropdown] = useState(false)

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

  const handleDropdown = () => {
    setDropdown(dropdown => {
      return !dropdown
    })
  }

  const getProjects = async () => {
    const cachedProjects = localStorage.getItem('projects')

    if (cachedProjects) {
      setProjectData(JSON.parse(cachedProjects))
      return
    }

    try {
      const projects = await fetchProjects()
      setProjectData(projects)
      localStorage.setItem('projects', JSON.stringify(projects)) // simpan cache
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
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

      {/* Mobile Dropdown */}
      {/* <div className="sm:hidden px-0 py-4">
        <select
          className="w-full px-4 py-2 rounded-xl bg-white text-sky-500 font-bold"
          value={active}
          onChange={(e) => setActive(e.target.value)}
        >
          {catalog.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div> */}
      <div className='dropdown'>
        <div className="dropdown-btn" onClick={handleDropdown}>
          {active} {
            dropdown ? <ArrowDropDownRoundedIcon /> : <ArrowDropUpRoundedIcon />
          }
        </div>
        {dropdown && (
          <div className="dropdown-content" data-aos="flip-down" data-aos-easing="ease-in-sine">
            {catalog.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActive(item)
                  setDropdown(false)
                }}
                className={`dropdown-item
                  ${active === item
                    ? 'bg-sky-500 text-white font-bold'
                    : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white'
                  }`}
                data-aos="fade-left"
                data-aos-delay={index * 200}
                data-aos-mirror="true"
                data-aos-easing="ease-in-sine"
              >
                {item}
              </div>
            ))}
          </div>
        )
        }
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
