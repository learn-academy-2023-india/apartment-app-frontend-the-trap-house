import React from "react"
import { NavLink } from "react-router-dom"
import HomeBackgroundImage from "../assets/HomeBackgroundImage.png"

const Home = ({ currentUser }) => {
  return (
    <>
      <div className="welcome-message">
        <h1>Welcome to The Trap!</h1>
        <p>Welcome to the TrapHouse, where all of your home and house needs can be met. Do you want a beautifully spacious kitchen to enhance your cooking skills? A large living room with bay windows for you to assemble with your partners and nem? Want to have enough rooms and couches for the entire family to fall asleep from the itis after a cookout? Look no further. We here at the TrapHouse will find you the perfect place to settle down and live out all your hood-rich dreams.
          <div></div>
        <NavLink to="/listings" className="explore-button">Explore Listings</NavLink>
        </p>
        <div className="backgroundimage" > <img src={HomeBackgroundImage}
        alt="..."
        style={{ width: "100%", height: "auto" }} /> </div>
      </div>
    
    </>
    
  )
} 

export default Home