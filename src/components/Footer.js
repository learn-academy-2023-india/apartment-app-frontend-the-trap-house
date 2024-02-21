import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h1>The TrapHouse</h1>
              </div>
              <div className="col-md-4">
              </div>
              <div className="col-md-4">
                <h6>Connect with Us</h6>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/traphouse">Trap Music Museum</NavLink>
              </div>
            </div>
          </div>
        </footer>
      )
    }
export default Footer