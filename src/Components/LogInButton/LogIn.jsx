import React from 'react'
import "./../LogInButton/LogIn.css"

const LogIn = (prop) => {
  return (
    <button className="btn  ">
   <h2 className=' !text-base '> {prop.text}</h2>
</button>


  )
}

export default LogIn
