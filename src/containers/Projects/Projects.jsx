import React from 'react'
import CalculatorProject from '../../components/CalculatorProject/CalculatorProject';
import QuizProject from '../../components/QuizProject/QuizProject';
import "./Projects.scss";
// import BrewdogProject from "../../components"

export const Projects = () => {
  return (
    <section class="projects">
        <h2 class="projects__title" id="projects">Projects</h2>
        <hr/>
        {/* <BrewdogProject /> */}
        <QuizProject />
        <CalculatorProject />




    
</section>
  )
}
