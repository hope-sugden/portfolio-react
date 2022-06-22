import quiz from "../assets/images/quiz.png";
import calculator from "../assets/images/calculator.png";
import brewdog from "../assets/images/brewdog.png";
import morseCode from "../assets/images/morseCode.png";
import fullstack from "../assets/images/fullstack.png";


const projectsArray = [
    {
        projectID:"1",
        Name:"Full Stack Project",
        Tag:"A crochet project tracker connected to a database",
        Description:"This is our final project on the _nology course and our first full stack prtoject. We were challeged to make a full stack project with a database. The data can be displayed, added, deleted and updated from the front end website.",
        techStack:["React","CSS/SCSS","JavaScript","Java","GCP","SpringBoot","SQL"],
        image:`${fullstack}`,
        websiteLink:"https://hope-sugden.github.io/crochet-tracker-frontend/",
        codeLink:"https://github.com/hope-sugden/crochet-tracker-frontend"
    },
    {
        projectID:"2",
        Name:"Brewdog Project",
        Tag:"A website built in react using APIs to display and filter beers.",
        Description:"This was my fourth project on the nology course and our first project using React. We were challeged to make a website to display Brewdog Beers by pulling information through from an API. We were also required to add a search bar and 3 filters.",
        techStack:["React","CSS/SCSS","JavaScript"],
        image:`${brewdog}`,
        websiteLink:"https://hope-sugden.github.io/brewdog-project/",
        codeLink:"https://github.com/hope-sugden/brewdog-project"
    },
    {
        projectID:"3",
        Name:"Quiz Game",
        Tag:"A quiz made in Javascript",
        Description:"This was my third project on the _nology course and my second JavaScript project. We were given a week to create a game of our choosing so I made a quiz. My quiz includes 10 questions and you have 15 seconds to answer each question. If you answer correctly, the answer will turn green and 1 point will be added to the score. If you answer incorrectly, the answer will turn red and no points are added to the score. After 1 second the next question will be displayed and the timer will restart. If the timer runs out the quiz will automatically move onto the next question. At the end of the quiz the final score is displayed and a little message depending on the score. There is a home button that can be pressed at any time to return to the homepage and restart the game.  Each time the game is played the questions are displayed in a random order.",
        techStack:["HTML","CSS/SCSS","JavaScript"],
        image:`${quiz}`,
        websiteLink:"https://hope-sugden.github.io/js-game-project/",
        codeLink:"https://github.com/hope-sugden/js-game-project"
    },
    {
        projectID:"4",
        Name:"Calculator Project",
        Tag:"A fully functioning calculator made in Javascript",
        Description:"This was my second project on the _nology course and my first Javascript project. The challenge was to make a fully functioning calculator and style it to our liking. I decided to have 2 display screens so the equation and the answer can be displayed at the same time. All of the functions work as per a scientific calculator.",
        techStack:["HTML","CSS/SCSS","JavaScript"],
        image:`${calculator}`,
        websiteLink:"https://hope-sugden.github.io/calculator-project/",
        codeLink:"https://github.com/hope-sugden/calculator-project"
    },
    {
        projectID:"5",
        Name:"Morse Code Translator",
        Tag:"A translator to convert text to and from Morse Code",
        Description:"This was a short challenge set to us on the nology course. We were challenged to create a working Morse Code Translator in less than 4 hours. It was such a daunting yet fun challenge that really cemented by JavaScript knowledge. It's only limitation is that I havent added all symbols to the data so at the moment only letters, numbers and full stops can be translated. ",
        techStack:["HTML","CSS/SCSS","JavaScript"],
        image:`${morseCode}`,
        websiteLink:"https://hope-sugden.github.io/morse-code-calculator/",
        codeLink:"https://github.com/hope-sugden/morse-code-calculator"
    }    
]

export default projectsArray;