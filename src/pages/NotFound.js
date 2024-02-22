import React from "react"
import { NavLink } from "react-router-dom"
import RedBlue from "../assets/RedBlue.gif"


const NotFound = () => {
  return (
    <>
     <div className="NF">
      <img src={RedBlue} alt="five-Ohhh" className="NotFound-gif" />
    </div>
    <div className="not-found-container">
      <h1>404</h1>
      <h3>I dont know what you were looking for but you got found!</h3>
      <NavLink to="/" className="home-button">Return Home</NavLink>
    </div>
    </>
  )
} 

export default NotFound