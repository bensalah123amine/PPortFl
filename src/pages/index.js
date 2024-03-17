import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../component/Layout";
import Main from "../component/Main";
import Header from "../component/Header";
import styled from "styled-components";
import { ReactTyped } from "react-typed";
import ButtonMobile from "../component/ButtonMobile";








const IndexPage = () => {
  return (

    <Layout  >




      <div className="  px-xs-4 w-100 bg-red">

        <Header />
        <ButtonMobile/>
        <Section id="hero" className=" d-flex flex-column justify-content-center align-items-center">
          <div className="hero-container" data-aos="fade-in">
            <h1> Bensalah Amine</h1>

            <ReactTyped
              strings={[
                "Developer full stack",
                "i'm a react js developer",
                "i'm a node js developer",
                "i'm a gatsby jsdeveloper",
                "i'm a mongoDb developer "


              ]}
              typeSpeed={40}
              backSpeed={50}

              loop
            >
              <input type="text" style={{
                width: 400,
                height: 50,
                border: 'none',
                backgroundColor: 'blue',
                color: 'white'
              }} />
            </ReactTyped>
          </div>
        </Section>

        <Main />
      </div>




    </Layout>

  )
}

export default IndexPage




// styles......................
const Section = styled.section`
margin-left: 300px;
 
  height: 100vh;
  background: url("https://media.istockphoto.com/photos/macca-kabe-picture-id508107988?k=20&m=508107988&s=612x612&w=0&h=2Qxg2RzsxqvZN33s4ntFyVNNfvDQZrhFF1Pzmwz8G-M=") top center;
  background-size: cover;
  
  @media only screen and (max-width: 600px) {
    
    margin-left: 0px;
    
   
}
  
  hero:before {
    content: "";
    background: rgba(5, 13, 24, 0.3);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  
   
    position: relative;
    z-index: 2;
    min-width: 300px;
 
  
   h1 {
    margin: 0 0 10px 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
  }
  
   p {
    color: #fff;
    margin-bottom: 50px;
    font-size: 26px;
    font-family: "Poppins", sans-serif;
  }
  
   p span {
    color: #fff;
    padding-bottom: 4px;
    letter-spacing: 1px;
    border-bottom: 3px solid #149ddd;
  }
  
  @media (min-width: 1024px) {
   
      background-attachment: fixed;
   
  }
  
  @media (max-width: 768px) {
     h1 {
      font-size: 28px;
      line-height: 36px;
    }
  
     h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
  }
  




`

export const Head = () => <title>Home Page</title>
