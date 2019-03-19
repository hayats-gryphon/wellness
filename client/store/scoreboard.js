// import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SCORE = 'GET_SCORE'
const GET_HIGHSCORE = 'GET_HIGHSCORE'
const UPDATE_SCORE = 'UPDATE_SCORE'
/**
 * INITIAL STATE
 */
const defaultScore = {
  score: 0,
  highScore: 200
}

/**
 * ACTION CREATORS
 */
const getScore = score => ({type: GET_SCORE, score})
const getHighScore = highScore => ({type: GET_HIGHSCORE, highScore})
export const updateScore = increaseBy => ({type: UPDATE_SCORE, increaseBy})

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
    case GET_HIGHSCORE:
      return {
        ...state,
        highScore: action.highScore
      }
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + action.increaseBy
      }
    default:
      return state
  }
}
