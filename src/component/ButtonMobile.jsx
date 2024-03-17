import React from 'react'
import styled from 'styled-components'
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from 'react';
import { Link } from 'gatsby';

const ButtonMobile = () => {

    const hederMobile=[
        {id:1,name:"Home",hrf:"#about"},
        {id:1,name:"Portfolio",hrf:"#portfolio"},
        {id:1,name:"Services",hrf:"#sevices"},
        {id:1,name:"Contact" ,hrf:"#contact"},
    ]
    const [visible,setVisible]=useState(false)
  return (
   <ButtonMobi>
  <HiMenuAlt1 onClick={()=>
setVisible(!visible)


} />


{visible && <div style={{position:"absolute",fontSize:15 ,display:"flex",flexDirection:"column",top:55,left:0,width:"100px",height:"200px",padding:5, zIndex:100, backgroundColor:'black',borderRadius:10,color:"white"}} >
  {hederMobile.map(item=>
    <li style={{marginTop:10}}><Link onClick={()=>setVisible(false)} to={item.hrf}><span >{item.name} </span> </Link> </li>

  )}
   
    </div>}
   </ButtonMobi>
  )
}

export default ButtonMobile


const ButtonMobi =styled.div`



@media (max-width: 600px) {
    font-size:2rem;
background:black;
color:blue;
height:60px;
visibility: visible;
padding: 10px;
position:fixed;
z-Index:6;
width:100%



   
  }
  visibility: hidden;
  height:   0px;
  

`