import React from 'react'
import Title from './Title'
import NavUl from './NavUl'
import * as aboutStyle from '../styles/about.module.css'
import myImage from "../images/myImage1.jpg"


const About = () => {
    const data = [
        
        {name:"Website:",solve:"www.amine.com"},
        {name:"Phone:",solve:"+212651495479"},
        {name:"City:",solve:"MADAGH-BERKANE, MAROC"},
      
      
      ]
    const data2 =[
        {name:"Age:",solve:"33"},
        {name:"Degree:",solve:"Master"},
        {name:"PhEmailone:",solve:"aminebensalah62@gmail.com"},
        {name:"Freelance:",solve:"Available"},
        
      
      ]
  return (
    <section id="about" className={aboutStyle}>
  <div className="container">
    

    <Title    title='About' className={aboutStyle} /> 
    

    <div className="row">
      <div className="col-lg-4" data-aos="fade-right">
        <img src={myImage} width="300"  className="img-fluid" alt="img"/>
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>Mobile &amp; Web Developer.</h3>
        <p className="fst-italic">
        As a Mobile and Web Developer, I specialize in crafting responsive and user-friendly applications 
              for both mobile and web platforms. With a strong foundation in frontend and backend development, 
              I bring ideas to life using cutting-edge technologies and best practices..
        </p>
        <p className="fst-italic">
        As a Mobile and Web Developer, I specialize in crafting responsive and user-friendly applications 
              for both mobile and web platforms. With a strong foundation in frontend and backend development, 
              I bring ideas to life using cutting-edge technologies and best practices..
        </p>
        <p className="fst-italic">
              Whether it's creating a seamless user experience or optimizing app performance, I'm committed 
              to delivering solutions that exceed expectations and drive business growth. I thrive in 
              collaborative environments and enjoy tackling complex challenges to create innovative solutions.
            </p>
        <div style={{ background: "linear-gradient(#e66465, #9198e5)" ,width:"100%",height:"100px"}}></div>
        <div className="row">
          <div className="col-lg-6">
           <NavUl data={data} />
          </div>
          <div className="col-lg-6">
          <NavUl data={data2} />
           
          </div>
        </div>
        
        
      </div>
    </div>

  </div>
</section>
  )
}

export default About