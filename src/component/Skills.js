import React from 'react'
import Title from './Title'
import * as skillsStyle from '../styles/skills.module.css'

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
  <div className="container">

   
    <Title title="Skills" className="section-title" />

    <div className="row skills-content">

      <div className="col-lg-4 mt-3" data-aos="fade-up">

        <div className={skillsStyle.progress}>
          
          
          <span className={skillsStyle.skill}>HTML <i className={skillsStyle.val}>100%</i></span>
          <div className={skillsStyle.progressBarWrap}>
            <div className={skillsStyle.progressBar100} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          
        </div>

        <div className={skillsStyle.progress}>
          <span className={skillsStyle.skill}>CSS <i className={skillsStyle.val}>90%</i></span>
          <div className={skillsStyle.progressBarWrap}>
            <div className={skillsStyle.progressBar90} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className={skillsStyle.progress}>
          <span className={skillsStyle.skill}>JavaScript <i  className={skillsStyle.val}>75%</i></span>
          <div className={skillsStyle.progressBarWrap}>
            <div className={skillsStyle.progressBar75} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>

      <div className="col-lg-4 mt-3" data-aos="fade-up" data-aos-delay="100">

      <div className={skillsStyle.progress}>
          <span className={skillsStyle.skill}> Node js<i className={skillsStyle.val}>70%</i></span>
          <div className={skillsStyle.progressBarWrap}>
            <div className={skillsStyle.progressBar70} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className={skillsStyle.progress}>
          <span className={skillsStyle.skill}>React js <i className={skillsStyle.val}>95%</i></span>
          <div className={skillsStyle.progressBarWrap}>
            <div className={skillsStyle.progressBar95} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className={skillsStyle.progress}>
          <span className={skillsStyle.skill}>Typescript <i className={skillsStyle.val}>75%</i></span>
          <div className={skillsStyle.progressBarWrap}>
            <div className={skillsStyle.progressBar75} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className={skillsStyle.progress}>
          <span className={skillsStyle.skill}>reactt Native<i className={skillsStyle.val}>75%</i></span>
          <div className={skillsStyle.progressBarWrap}>
            <div className={skillsStyle.progressBar75} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className={skillsStyle.progress}>
          <span className={skillsStyle.skill}>Flutter  <i className={skillsStyle.val}>70%</i></span>
          <div className={skillsStyle.progressBarWrap}>
            <div className={skillsStyle.progressBar70} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
  )
}

export default Skills