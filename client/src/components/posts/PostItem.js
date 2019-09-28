import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const PostItem = props => {
  const { auth, loading, addLike, removeLike, deletePost, eachPost, showActions } = props
  const { _id, name, avatar, user, likes, comments, date, text} = eachPost
  return (
    <Fragment>
         
        <div className="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img
                className="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p className="my-1">
              {text}
            </p>
             <p className="post-date">
                Posted on <Moment format="MM/DD/YYY">{date}</Moment>
            </p>
            {showActions && <Fragment>
              <button type="button" className="btn btn-light"
            onClick={ e => addLike(_id)}>
              <i className="fas fa-thumbs-up"></i> {' '}
              {likes.length > 0 && (
                <span>{likes.length}</span>
              )}
            </button>
            <button type="button" className="btn btn-light"
            onClick={e => removeLike(_id)}>
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion {' '}
              {comments.length > 0 && (
                <span className='comment-count'> {comments.length}</span>
                )}
            </Link>
            {/* this is the post user and the logged in user*/}
            {!loading && user === auth.user._id && (
            <button      
            type="button"
            className="btn btn-danger"
            onClick={e => deletePost(_id)}>
            <i className="fas fa-times"></i>
          </button>
            )}

            </Fragment>}
          </div>
        </div>
    </Fragment>
  )
}
PostItem.defaultProps = {
  showActions : true
}

PostItem.propTypes = {
  eachPost: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostItem