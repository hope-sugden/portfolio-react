import React from 'react'
import "./NologyExperience.scss";
import learning from "../../assets/images/learning.png";

export const NologyExperience = () => {
  return (
    <div className="experience">
        <div className="experience__text">
            <div className="experience__nology">
                <h3>_nology</h3>
                <h4>Trainee Software Developer</h4>
                <p>Full stack developer training course which takes people with little to no background in tech and teaches them to code in just 12 weeks.</p>
            </div>
            <div className="experience__stack">
                <h3>Tech Stack</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>Javascript</li>
                </ul>
            </div>
            <a href="https://nology.io/" className="experience__button">View Website</a>
        </div>

        <img src={learning} alt="3 people sat at a laptop talking" className="experience__img"/>
    </div>
  )
}
export default NologyExperience