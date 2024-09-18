import React from 'react'
import PropTypes from 'prop-types'


import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.apptitle}{props.name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/abt">About Us</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dashboard
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Admin Dashboard</a></li>
              <li><a className="dropdown-item" href="/">Student Dashboard</a></li>
              
            </ul>
          </li>         
        </ul>



        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick={props.setdark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label htmlFor="darkmode" style={{marginRight:10}}>Dark MODE </label>
        </div>

        <form className="d-flex" role="search">
          <button className="btn btn-primary" type="submit">Log in</button>
        </form>
      </div>
    
    </div>
  </nav>
  )
}

Navbar.propTypes={
    apptitle:PropTypes.string
}

// Navbar.defaultProps={
//     apptitle:"your app nname"
// }

        //this default proptype run when user can not pass the value of props
        //EXAMPLE : <Navbar/>    default proptype will run in only this case

        //isRequired
