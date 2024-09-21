import React from 'react'
import data from './data'
import Quote from './Quote';
console.log(data);

const Quotes = () => {
  
  return (
    data.map((ele,index)=>{
      return (<Quote data={ele} key={index}/>)
      })
  )
}

export default Quotes