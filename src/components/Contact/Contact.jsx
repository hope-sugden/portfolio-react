import React from 'react'
import "./Contact.scss";
import orangeEmail from "../../assets/images/email-orange.png";
import orangeGithub from "../../assets/images/github-orange.png";
import orangeLinkedIn from "../../assets/images/Linkedin-orange.png";
import orangeCV from "../../assets/images/cv-orange.png";
import pdf from "../../data/Hope Sugden CV - 2021.pdf"

const Contact = () => {
  return (
    <section className="contact">
        <h2 id="contact">Contact</h2>
        <hr/>
        <div className="contact__body">
            <img src={orangeEmail} alt="email icon" className="contact__email"/>
            <h3>hope_8@hotmail.co.uk</h3>
            <div className="contact__links">
            <a href="https://github.com/hope-sugden" ><img src={orangeGithub} alt="Github logo" className="contact__github"/></a>
            <a href="https://www.linkedin.com/in/hope-sugden-412829109"><img src={orangeLinkedIn} alt="Linkedin logo" className="contact__linkedin"/></a>
            <a href={pdf} ><img src={orangeCV} alt="CV logo" className="contact__cv"/></a>
            </div>
        </div>
    </section>
  )
}

export default Contact