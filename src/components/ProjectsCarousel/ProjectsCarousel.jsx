import React, { useState } from 'react'
import "./ProjectsCarousel.scss"
import projectsArray from "../../data/projectsArray";
import leftArrow from "../../assets/images/arrow_back.svg";
import rightArrow from "../../assets/images/arrow_forward.svg";
import MoreInfo from "../MoreInfo/MoreInfo";

const ProjectsCarousel = () => {
    const [counter, setCounter] = useState(0);
    const [showMoreInfo,setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    }

    const projectImagesArray = projectsArray.map(project => {
        return project.image;
    })

    const projectTagsArray = projectsArray.map(project => {
        return project.Tag;
    })
    const projectNamesArray = projectsArray.map(project => {
        return project.Name;
    })
    const projectDescriptionsArray = projectsArray.map(project => {
        return project.Description;
    })
    const projectCodeLinkArray = projectsArray.map(project => {
        return project.codeLink;
    })
    const projectTechStacksArray = projectsArray.map(project => {
        return project.techStack;
    })
    const projectWebLinkArray = projectsArray.map(project => {
        return project.websiteLink;
    })


    const handleIncrement = () => {
        if(counter === projectsArray.length -1) {
            setCounter(0);
        }else {
            setCounter(counter+1);
        }
    };
    const handleDecrement = () => {
        if(counter === 0){
            setCounter(projectsArray.length-1);
        }else {
            setCounter(counter-1);
        }
    };
  return (
    <div className='carousel'>
        {showMoreInfo && <MoreInfo toggleMoreInfo={toggleMoreInfo} projectImage={projectImagesArray[counter]} projectTag={projectTagsArray[counter]} projectName={projectNamesArray[counter]} projectDescription={projectDescriptionsArray[counter]} 
        projectCode={projectCodeLinkArray[counter]} projectTechStack={projectTechStacksArray[counter]} projectWebsite={projectWebLinkArray[counter]}/>}
        <img
            src={leftArrow}
            alt="left arrow"
            onClick={handleDecrement}
            className="carousel__arrow carousel__arrow--left"
        />
        <div className='carousel__body'>
            <h2 className='carousel__name'>{projectNamesArray[counter]}</h2>
            <img src={projectImagesArray[counter]} alt="" className="carousel__image" />
            <h3 className='carousel__tag'>{projectTagsArray[counter]}</h3>
            <button className='carousel__button' onClick={toggleMoreInfo}>More info ...</button>
        </div>
        <img
            src={rightArrow}
            alt="right arrow"
            onClick={handleIncrement}
            className="carousel__arrow carousel__arrow--right"
        />
    </div>
  )
}

export default ProjectsCarousel