import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types';

const styles = {
  body: {
    padding: '10%'
  }
}
const Landing = ({isAuthenticated}) => {
  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }
  return (
    <section style={styles.body}>

          <div className="buttons">
            <Link to='/register' className="btn btn-primary one">
            <p className="oneword">
            Sign Up
            </p>
            </Link>
            <Link to='/login' className="btn btn-light two">
            <p className="twoword">
            Login
            </p>
            </Link>
          </div>
       
   



    </section>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

export default Landing

//RACF
