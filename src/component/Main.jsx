import React from 'react'
import * as mainStyle from '../styles/main.module.css'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Facts from './Facts'
import Skills from './Skills'
import Contact from './Contact'


const Main = () => {

  return (
    <div>
          <main id={mainStyle.main}>

{/* <!-- ======= About Section ======= --> */}
<About/>

{/* <!-- ======= Facts Section ======= --> */}
<Facts/>

{/* <!-- ======= Skills Section ======= --> */}
<Skills/>

{/* <!-- ======= Resume Section ======= --> */}


{/* <!-- ======= Portfolio Section ======= --> */}
<Portfolio/>
<Services/>


{/* 
 */}


<Contact/>

</main>
    </div>
  )
}

export default Main


// styles main..............

