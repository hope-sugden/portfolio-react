import React from 'react'
import "./QuizProject.scss";
import quiz from "../../assets/images/quiz.png"

const QuizProject = () => {
  return (
    <div class="quizProject">

        <img src={quiz} alt="mobile phone showing an app" className="quizProject__img"/>
        <div className="quizProject__text">
                
            <div className="quizProject__info">
                <h3>Quiz Game</h3>
                <p>This was my third project on the _nology course and my second JavaScript project. We were given a week to create a game of our choosing so I made a quiz. My quiz includes 10 questions and you have 15 seconds to answer each question. If you answer correctly, the answer will turn green and 1 point will be added to the score. If you answer incorrectly, the answer will turn red and no points are added to the score. After 1 second the next question will be displayed and the timer will restart. If the timer runs out the quiz will automatically move onto the next question. At the end of the quiz the final score is displayed and a little message depending on the score. There is a home button that can be pressed at any time to return to the homepage and restart the game.  Each time the game is played the questions are displayed in a random order.</p>
            </div>
            <div className="quizProject__stack">
                <h3>Tech Stack</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>Javascript</li>
                </ul>
            </div>
            <div className="quizProject__buttons">
                <a href="https://hope-sugden.github.io/js-game-project/" className="quizProject__website">View Website</a>
                <a href="https://github.com/hope-sugden/js-game-project" className="quizProject__code">View Code</a>
            </div>
        </div>

                
    </div>
  )
}

export default QuizProject