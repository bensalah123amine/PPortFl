import React from 'react'
import Title from './Title'


const Contact = () => {
  return (
    <section id="contact" className="contact">
    <div className="container">
  
      <Title title='Contact' className="section-title"/>
      
  
      <div className="row" data-aos="fade-in">
  
        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>MADAGH, BERKANE, N:63300</p>
            </div>
  
            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>aminebensalh@gmail.com</p>
            </div>
  
            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>00212651495479</p>
            </div>
  
            <iframe src="https://maps.google.com/maps?q=madagh&t=&z=13&ie=UTF8&iwloc=&output=embed"  style={{border:"0", width: "100%", height:" 290px"}} >contact</iframe>


          </div>
  
        </div>
  
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" required/>
              </div>
            </div>
            <div className="form-group">
              <label  htmlFor ="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" required/>
            </div>
            <div className="form-group">
              <label  htmlFor ="name">Message</label>
              <textarea className="form-control" name="message" rows="10" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
  
      </div>
  
    </div>
  </section>
  )
}

export default Contact