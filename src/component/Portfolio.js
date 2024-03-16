import React from 'react'
import Title from './Title'
import CardPortfolio from './CardPortfolio'
import ImageBockimon1 from "../images/pockimon1.jpg"
import ImgeBoutique from "../images/maBoutique1.jpeg"
import ImgeSchool from "../images/school.png"

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
  <div className="container">

   
    <Title title="Portfolio" className="section-title" />

    

    <div style={{padding:40}} className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <CardPortfolio image ={ImageBockimon1} title="App 1"/>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
      <CardPortfolio image ={ImgeBoutique} title="App 2"/>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <CardPortfolio image ={ImgeSchool} title="Card 1"/>
      </div>

     


      
      

      

      

      

    </div>

  </div>
</section>
  )
}

export default Portfolio