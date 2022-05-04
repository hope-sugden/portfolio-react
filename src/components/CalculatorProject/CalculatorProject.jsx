import React from 'react'
import "./CalculatorProject.scss"
import calculator from "../../assets/images/calculator.png";

const CalculatorProject = () => {
  return (
    <div className="calculatorProject">

                <div className="calculatorProject__text">
                    <div className="calculatorProject__info">
                        <h3>Calculator Project</h3>
                        <p>This was my second project on the _nology course and my first Javascript project. The challenge was to make a fully functioning calculator and style it to our liking. I decided to have 2 display screens so the equation and the answer can be displayed at the same time. All of the functions work as per a scientific calculator.</p>
                    </div>
                    <div className="calculatorProject__stack">
                        <h3>Tech Stack</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div className="calculatorProject__buttons">
                    <a href="https://hope-sugden.github.io/calculator-project/" className="calculatorProject__website">View Website</a>
                    <a href="https://github.com/hope-sugden/calculator-project" className="calculatorProject__code">View Code</a>
                    </div>
                </div>

                <img src={calculator} alt="photo of calculator" className="calculatorProject__img"/>
            </div>
  )
}

export default CalculatorProject