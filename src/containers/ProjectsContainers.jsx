import React from 'react'
import { Preview } from '../components/Icons/Icons'
import Projects from '../components/Projects/Projects'

const ProjectsContainers = () => {
  return (
    <>
         <section id="projects" class="projects">
            <div class="projects__wrapper">
                <div class="projects__title">
                    <h2 class="projects__title-h2 title-animation">Proyectos<span class="projects__title-h2--dot">.</span></h2>
                </div>

                <div class="projects__grid">
                    <Projects/>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProjectsContainers