/**
 * ACTION TYPES
 */
const GOT_HOLES = 'GOT_HOLES'
const VIDEO_LOADED = 'VIDEO_LOADED'

/**
 * INITIAL STATE
 */
const initialState = {
  holes: [],
  videoLoaded: false
}

/**
 * ACTION CREATORS
 */
export const gotHoles = holes => ({type: GOT_HOLES, holes})
export const videoLoaded = () => ({type: VIDEO_LOADED})

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_HOLES:
      return {...state, holes: action.holes}
    case VIDEO_LOADED:
      return {...state, videoLoaded: true}
    default:
      return state
  }
}
