// import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SCORE = 'GET_SCORE'

/**
 * INITIAL STATE
 */
const defaultScore = {
  score: 0
}

/**
 * ACTION CREATORS
 */
const getScore = score => ({type: GET_SCORE, score})

/**
 * REDUCER
 */
export default function(state = defaultScore, action) {
  switch (action.type) {
    case GET_SCORE:
      return {
        ...state,
        score: action.score
      }
    default:
      return state
  }
}
