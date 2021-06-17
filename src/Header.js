import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";


const Header = (props) => {
  console.log(props.User);

  return (
    <>
      {props.User && props.User.admin && (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink to="/Dashboard" className="navbar-brand">
            Company Name
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/Dashboard" className="nav-link active">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/client" className="nav-link active">
                  Client
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Employes" className="nav-link active">
                  Employee
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      )}
     
     {props.User && props.User.user && (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink to="/Dashboard" className="navbar-brand">
          Employee Dashboard
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
             
              <li className="nav-item">
                <NavLink to="/client" className="nav-link active">
                  Client
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      )}
    </>
  );
};

export default Header;
