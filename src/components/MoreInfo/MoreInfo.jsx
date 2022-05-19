import React from 'react'
import "./MoreInfo.scss";
import whiteCross from "../../assets/images/white_cross.svg";

const MoreInfo = ({toggleMoreInfo,projectImage,projectTag, projectName,projectDescription,projectCode,projectTechStack,projectWebsite}) => {
  const techStackJSX = projectTechStack.map(tech => <li className='more-info__tech-stack'>{tech}</li>)
    return (
    <div className='more-info'>
        <div className='more-info__content'>
            <img src={whiteCross} alt="Close info" className="more-info__cross" onClick={toggleMoreInfo} />
            <h2 className='more-info__name'>{projectName}</h2>
            <p className="more-info__tag">{projectTag}</p>
            <div className='more-info__img-div'>
                <img src={projectImage} alt={projectName} className="more-info__image"/>
            </div>
            <p className='more-info__description'>{projectDescription}</p>
            <div>
                <h3 className='more-info__stack'>Tech Stack:</h3>
                <ul className='more-info__list'>
                    {techStackJSX}
                </ul>
            </div>
            <div className='more-info__buttons'>
                <a href={projectWebsite} className="more-info__website">View Website</a>
                <a href={projectCode} className="more-info__code">View Code</a>
            </div>
        </div>
    </div>
  )
}

export default MoreInfo