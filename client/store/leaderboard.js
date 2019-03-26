import Axios from 'axios'

// import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_LEADERBOARD = 'GET_LEADERBOARD'

/**
 * INITIAL STATE
 */
const defaultLeaderboard = {
  leaderboard: []
}

/**
 * ACTION CREATORS
 */
const getLeaderboard = leaderboard => ({type: GET_LEADERBOARD, leaderboard})

/**
 * THUNK CREATORS
 */
export const fetchLeaderboard = () => async dispatch => {
  try {
    const {data} = await Axios.get(`/api/users/leaderboard`)
    dispatch(getLeaderboard(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultLeaderboard, action) {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        leaderboard: action.leaderboard
      }
    default:
      return state
  }
}
