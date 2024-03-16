import React from 'react'
import '../styles/global.css'


const Layout = ({path,children}) => {
  return (
    <>
       
       <div className='main'>
       {children}
       </div>
        
        
    </>
  )
}


export default Layout
