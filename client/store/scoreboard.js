import Axios from 'axios'

// import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SCORE = 'GET_SCORE'
const GET_HIGHSCORE = 'GET_HIGHSCORE'
const UPDATE_SCORE = 'UPDATE_SCORE'
const RESET_SCORE = 'RESET_SCORE'
const GET_HIGHSCORE_FROM_USER = 'GET_HIGHSCORE_FROM_USER'
const UPDATE_USER_HIGHSCORE = 'UPDATE_USER_HIGHSCORE'
/**
 * INITIAL STATE
 */
const defaultScore = {
  score: 0,
  highScore: 0
}

/**
 * ACTION CREATORS
 */
const getScore = score => ({type: GET_SCORE, score})
const getHighScore = highScore => ({type: GET_HIGHSCORE, highScore})
const updateUserHighScore = highScore => ({
  type: UPDATE_USER_HIGHSCORE,
  highScore
})
export const getHighScoreFromUser = highScore => ({
  type: GET_HIGHSCORE_FROM_USER,
  highScore
})
export const updateScore = increaseBy => ({type: UPDATE_SCORE, increaseBy})
export const resetScore = () => ({type: RESET_SCORE})

/**
 * THUNK CREATOR
 */
export const updateHighScore = (userId, score) => {
  console.log('highscore in updateHighScore: ', score)
  console.log('typeof highscore in updateHighScore: ', typeof score)
  return async dispatch => {
    if (userId) {
      try {
        const {data} = await Axios.put(`/api/users/${userId}`, {score: score})
        dispatch(updateUserHighScore(Number(data)))
      } catch (error) {
        console.error(error)
      }
    } else {
      dispatch(updateUserHighScore(score))
    }
  }
}
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
    case UPDATE_SCORE: {
      let newScore = state.score + action.increaseBy
      if (newScore < 0) newScore = 0
      return {
        ...state,
        score: newScore
      }
    }
    case RESET_SCORE:
      return {
        ...state,
        score: 0
      }
    case GET_HIGHSCORE_FROM_USER:
      return {
        ...state,
        highScore: action.highScore
      }
    case UPDATE_USER_HIGHSCORE:
      return {
        ...state,
        highScore: action.highScore
      }
    default:
      return state
  }
}
