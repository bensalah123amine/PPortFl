import React from 'react'
import MyServie from './MyServie'
import Title from './Title'

const Services = () => {
const myService = [
{nameService:"Web Development",description:"I specialize in building responsive and user-friendly websites using modern web technologies such as HTML5, CSS3, JavaScript, and React.js."},
{nameService:"Mobile App Development",description:"I develop cross-platform mobile applications using React Native, ensuring high performance and native-like user experience on both iOS and Android platforms."},
{nameService:"Backend Development",description:"I design and implement robust and scalable server-side solutions using Node.js, Express.js, and MongoDB, ensuring seamless integration with frontend applications."},

]

  return (
  
        <section id="sevices" className="services">
  <div className="container">

    
<Title title="sevices" className="section-title" />
    <div className="row">
     <MyServie myService={myService} /> 
    </div>

  </div>
</section>


    
  )
}

export default Services