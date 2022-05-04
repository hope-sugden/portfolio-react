import React from 'react'
import "./Experience.scss";
import NologyExperience from "../../components/NologyExperience/NologyExperience";

const Experience = () => {
  return (
    <section>
        <h2 className="experience__title" id="experience">Experience</h2>
        <hr/>
        <NologyExperience />
    </section>
  )
}

export default Experience