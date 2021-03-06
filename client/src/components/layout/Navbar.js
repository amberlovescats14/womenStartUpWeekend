import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const authLinks = (
    <div>
    <ul>

      <li>
      <Link to='/profiles'>Teachers</Link>
    </li>
    <li>
      <Link to='/posts'>Posts</Link>
    </li>
     <li>
      <Link to='/dashboard'>
      <i className='fas fa-user'/> 
      <span className="hide-sm">User</span> 
      </Link>  
    </li>
    <li>
      <Link to='/'
      onClick={props.logout}>
        <i className='fas fa-sign-out-alt'/> {' '}
        <span className="hide-sm">LogOut</span> 
      </Link>
    </li>
    </ul>
    </div>
  )



  const guestLinks = (
    <ul className="navbar-collapse">
        <li>
      <Link to='/'>
        <i className='fas fa-code'/> Home
      </Link>
    </li>
        <li>
      <Link to='/profiles'>Teachers</Link>
    </li>


    <li>
      <Link to='/register'>
        Register
      </Link>  
    </li>
    <li>
      <Link to='/login'>
        Login
      </Link>
    </li>

  </ul>
  )
  return (
    <nav className="navbar bg-dark " >
      <h1>
        <Link to='/'><i className="fas fa-code"></i> Indeed Education</Link>
      </h1>
    {!props.auth.loading &&  (<Fragment>
      {props.auth.isAuthenticated ? authLinks : guestLinks}
    </Fragment>)}
    </nav>
  )
}

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default Navbar

//RACF 