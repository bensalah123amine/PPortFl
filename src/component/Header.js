import  React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebookF,faInstagram,faGoogle} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import myImage from "../images/myImage2.jpg"







const Header = ({location}) => {
  let cInActive = 'inactive';
let cActive = 'active';
   const [addClass, setAddClass] = useState(cInActive);
  const handleClick = () => {
    setAddClass(cActive);
  };
  

  return (
    <HeaderP  >
    <div className="d-flex flex-column">
   
   

      <div className="profile">
        <img src={myImage}   alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><Link to="index.html"> BENSALAH AMINE </Link></h1>
        <div className="social-links mt-3 text-center" >
        
          <Link style={{color:'#1DA1F2',background:'white'}} to="#" className="twitter" >  <FontAwesomeIcon icon={faTwitter} /></Link>
          <Link style={{color:'#4267B2',background:'white'}} to="#" className="facebook"> <FontAwesomeIcon icon={faFacebookF} /> </Link>
         
          <Link style={{background: "linear-gradient(#F58529,#FEDA77,#DD2A7B, #8134AF,#F58529)" }} to="#" className="instagram"><FontAwesomeIcon  icon={faInstagram}/></Link>
          <Link style={{background: "linear-gradient(#4285F4,#DB4437,#F4B400,#0F9D58)" }} to="#" className="google-plus"><FontAwesomeIcon icon={faGoogle} /></Link>
          
          
        
          
          
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
        
       
       
          <li ><Link  to="#hero" onClick={handleClick} className={`nav-link scrollto ${addClass}`} ><i className="bx bx-home"></i> <span>Home</span></Link></li>
          <li><Link to="#about"  ><i className="bx bx-user"></i> <span>About</span></Link></li>
          {/* <li><Link  to="#resume" ><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li> */}
          <li><Link to="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
          <li><Link to="#sevices" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
          <li><Link to="#contact"  onClick={handleClick}><i className={`nav-link scrollto ${addClass}` } ></i> <span>Contact</span></Link></li>
        </ul>
      </nav>
    </div>
  </HeaderP>
  )
}

export default Header
 
const HeaderP = styled.header`




    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: #040b14;
    overflow-y: auto;

  
  .profile img {
    margin: 15px auto;
    display: block;
    width: 120px;
    border: 8px solid #2c2f3f;
    height:100px
  }
  
  .profile h1 {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    -moz-text-align-last: center;
    text-align-last: center;
    font-family: "Poppins", sans-serif;
  }
  
  .profile h1 a,
   .profile h1 a:hover {
    color: #fff;
    text-decoration: none;
  }
  
  .profile .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #212431;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
  }
  
   .profile .social-links a:hover {
    background: #149ddd;
    color: #fff;
    text-decoration: none;
  }
  
  main {
    margin-left: 300px;
  }
  
  @media (max-width: 1199px) {
    header {
      left: -300px;
    }
  
    main {
      margin-left: 0;
    }
  }

font-family: "Open Sans", sans-serif;
  color: #272829;
 
a {
    color: #149ddd;
    text-decoration: none;
  }
  
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Raleway", sans-serif;
  }
  li {
    position: relative;
    white-space: nowrap;
  }
  .nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
  text-decoration: none;
  color: #fff;
}

.nav-menu a:hover i,
.nav-menu .active i,
.nav-menu .active:focus i,
.nav-menu li:hover>a i {
  color: #149ddd;
}
  
`