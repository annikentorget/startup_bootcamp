import React from 'react'
import profile_picture from '../images/profile.png';

function About() {
  return (
    <div className="about container row">
        <h2 className="about__heading">About me</h2>
        <div className="about__img col">
            <img className="about__img" src={profile_picture}></img>
        </div>
        <div className="about__text col">
            <p>I am a former frontend-developer student, who now works as a servicedesk
employee at an IT firm.  I thrive in satisfying our customers, and making their 
day just a little bit easier.</p>
        </div>
    </div>
  )
}

export default About