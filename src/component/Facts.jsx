import React from 'react'
import Title from './Title'

const Facts = () => {
  return (
    <section id="facts" className="facts">
  <div className="container">

    
    <Title title='Facts' className ='section-title'/> 

    <div className="row no-gutters">

      <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
        <div className="count-box">
          <i className="bi bi-emoji-smile"></i>
          <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
          <p><strong>Happy Clients</strong> consequuntur quae</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
        <div className="count-box">
          <i className="bi bi-journal-richtext"></i>
          <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
          <p><strong>Projects</strong> adipisci atque cum quia aut</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
        <div className="count-box">
          <i className="bi bi-headset"></i>
          <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
          <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
        <div className="count-box">
          <i className="bi bi-people"></i>
          <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
          <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
        </div>
      </div>

    </div>

  </div>
</section>
  )
}

export default Facts