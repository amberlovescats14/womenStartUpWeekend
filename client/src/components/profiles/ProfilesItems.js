import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfilesItems = props => {
  const { profile: { user:{ _id, name, avatar,}},
          profile: {status }
        } = props
  return (
    <div key={_id} className="profile bg-light">
      <img className="round-img" src={avatar} alt="avatar"/>
      <div>
        <h2>{name}</h2>
        <p>{status} 
        </p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
        View Profile</Link>

      </div>
    </div>
  )
}

ProfilesItems.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfilesItems
