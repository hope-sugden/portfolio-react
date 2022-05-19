import React from 'react'
import "./Projects.scss";
import ProjectsCarousel from '../../components/ProjectsCarousel/ProjectsCarousel';

export const Projects = () => {
  return (
    <section className="projects">
        <h2 className="projects__title" id="projects">Projects</h2>
        <hr/>
        <ProjectsCarousel />    
</section>
  )
}
