import React from 'react'
import "./About.scss";
import orangePlane from "../../assets/images/plane-orange.png";


const About = () => {
  return (
    <section className="about">

        <h2 id="about">About</h2>
        <hr/>
        <div className="about__section">
            <div className="about__line1">
                <p className="about__paragraph">I graduated from the University of Portsmouth in 2017 with an upper second class BA in Accounting with Finance.</p>
                <img src={orangePlane} alt="plane icon" className="about__img"/>
            </div>
            <div className="about__line2">
                <img src={orangePlane} alt="plane icon" className="about__img"/>
                <p className="about__paragraph">Between 2017-2019 I spent my time travelling around South East Asia and Australasia.</p>
            </div>
            <div className="about__line3">
                <p className="about__paragraph">In 2019 I returned back to the UK with the plan to save up to backpack around Canada. Unfortunately covid hit and ruined all my travel plans so my temporary finance job became permanent.</p>
                <img src={orangePlane} alt="plane icon" className="about__img"/>
            </div>  
            <div className="about__line4">
                <img src={orangePlane} alt="plane icon" className="about__img"/>
                <p className="about__paragraph">In March 2022 I joined _nology to retrain and upskill as a software developer.</p>
            </div>
            <div className="about__line5">
                <p className="about__paragraph">I am currently based in Birmingham and am looking for a challenging and rewarding tech role.</p>
                <img src={orangePlane} alt="plane icon" className="about__img"/>
            </div>
        </div>
    </section>
  )
}

export default About