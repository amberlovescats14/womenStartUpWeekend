import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import PropTypes from 'prop-types'


const Profile = props => {
  const { getProfileById, profile, auth, match } = props
  useEffect(()=> {
    getProfileById(match.params.id)
  },[getProfileById, match.params.id])
  return (
    <div className="container postsOutside">
      {profile === null || profile.loading ? <Spinner/> : 
    <Fragment>
      <Link to='/profiles' className="btn btn-light">
      Back to Profiles</Link>
      {auth.isAuthenticated && 
        auth.loading  === false && 
          auth.user._id === profile.user._id && (
            <Link to='/edit-profile' className="btn btn-dark">
            Edit Profile
            </Link>
          )}
          <div className="profile-grid my-1">
          <ProfileTop profile={profile}/>
          <ProfileAbout profile={profile}/>


          </div>
      </Fragment> }
    </div>
  )
}

Profile.propTypes = {
  getProfileById : PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

export default Profile
