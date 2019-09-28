import React from 'react'
import { Link } from 'react-router-dom'

const DashboardFunction = () => {
  return (
    <div className="dash-buttons">
        <Link to="edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i>
         Edit Profile</Link>
      </div>
  )
}

export default DashboardFunction
