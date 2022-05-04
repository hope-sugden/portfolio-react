import React from 'react'
import "./Profile.scss"
import profilePhoto from "../../assets/images/profile.jpg";
import githubWhite from "../../assets/images/github-white.png";
import linkedinWhite from "../../assets/images/linkedin-white.png";
import emailWhite from "../../assets/images/email-white.png";

export const Profile = () => {
  return (
    <section className="profile">
    <img src={profilePhoto} alt="Image of Hope smiling" className="profile__img"/>
    <div className="profile__text">
        <h2>Hope Sugden</h2>
        <p>Birmingham, UK</p>
        <div className="profile__links">
            <a href="https://github.com/hope-sugden" ><img src={githubWhite} alt="Github logo" className="profile__links__github"/></a>
            <a href="https://www.linkedin.com/in/hope-sugden-412829109"><img src={linkedinWhite} alt="Linkedin logo" className="profile__links__linkedin"/></a>
            <a href="#contact"><img src={emailWhite} alt="Email logo" className="profil__links__email"/></a>
        </div>
    </div>
</section>
  )
}

export default Profile