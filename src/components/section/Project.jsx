import { useState } from 'react'
import ProjectComponents from '@section/content/Project'

function Project() {
    return (
        <section id='project' className='mx-auto select-none bg-sky-100 py-6 overflow-hidden'>
            <ProjectComponents />
        </section>
    )
}

export default Project