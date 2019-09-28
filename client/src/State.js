export default {
  getPosts: {
    posts: [],
    post: null,
    loading: true,
    error: {}
  },
  getCurrentProfile: {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
  },
  register: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  },
  alert: []
}