import React,{ useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import {
  Nav, NavItem
} from 'reactstrap'

const Header = (currentUser) => {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate("/")
    }
    return (
        <>
          <Nav>
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentindex" className="nav-link">
                View Apartments
              </NavLink>
            </NavItem>
    
            {currentUser && (
              <>
                <NavItem>
                  <NavLink to="/myapartments" className="nav-link">
                    My Apartments
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/apartmentnew" className="nav-link">
                    Add A Listing
                  </NavLink>
                </NavItem>
    
                <NavItem>
                  <NavLink className="nav-link" onClick={handleClick}>
                    Log Out
                  </NavLink>
                </NavItem>
              </>
            )}
    
            {!currentUser && (
              <>
                <NavItem>
                  <NavLink to="/login" className="nav-link">
                    Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </>
      )
}
export default Header