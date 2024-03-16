import React from 'react'


const NavUl = ({data}) => {
  return (
    <>
       {data.map (({name,solve},idx)=>
        <ul key={idx}>
             <li><i className="bi bi-chevron-right"></i> <strong>{name} </strong> <span>{solve} </span></li>
   
        </ul>
       )}

    </>
  )
}

export default NavUl