import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'




export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">{props.tittle}</Link>
          {/* <a className="navbar-brand" href=" ">{props.tittle}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Dark Mode':'Light Mode'}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.prototype = {
    tittle:PropTypes.string.isRequired,
    homeText:PropTypes.string.isRequired

}

// default props 
Navbar.defaultProps = {
    tittle:'set tittle here',
    homeText:'Home'

}
 