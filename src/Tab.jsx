import React, { useState } from 'react'
import data from './Tabdata'

const Tab = () => {
    const[activetabs,setactivetabs]=useState(0)
    const[activecontent,setactivecontent]=useState(data[0])
    let changedata=(i)=>{
      setactivetabs(i)
      setactivecontent(data[i])
    }
  return (
    <div className='divouter'>
      <h1 style={{textAlign:'left'}}>TABBING IN REACT</h1>
    
         <ul>
         {data.map((tabitems,i)=>{
           return(
            <li key={i}><button onClick={()=>changedata(i)} className={activetabs===i?'activebtn':''}>{tabitems.title}</button></li>
           )
        })}
     </ul>
     {activecontent!==undefined?
     <p>{activecontent.description}</p>
    :''}


     
      
    </div>
  )
}

export default Tab
