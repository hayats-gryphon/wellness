import Axios from 'axios'

// import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SCORE = 'GET_SCORE'
const GET_HIGHSCORE = 'GET_HIGHSCORE'
const UPDATE_SCORE = 'UPDATE_SCORE'
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

/**
 * THUNK CREATOR
 */

export const fetchUserHighScore = userId => async dispatch => {
  console.log('HEEEEREEEEEEE  inside scoreBoard')
  const {data} = await Axios.get(`/api/users/${userId}`)
  console.log('data inside component', data.highScore)
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
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + action.increaseBy
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
