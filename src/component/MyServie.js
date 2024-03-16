import React from 'react'

const MyServie = ({myService}) => {

  return (
    <>
        {myService.map(({nameService,description},idx)=>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100" key={idx}>
        <div className="icon"><i className="bi bi-card-checklist"></i></div>
        <h4 className="title"><a href="/adpp">{nameService} </a></h4>
        <p className="description">{description} </p>
      </div>
        
        )}
    </>
  )
}

export default MyServie