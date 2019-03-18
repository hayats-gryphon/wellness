/**
 * ACTION TYPES
 */
const GOT_MOLES = 'GOT_MOLES'
const VIDEO_LOADED = 'VIDEO_LOADED'

/**
 * INITIAL STATE
 */
const initialState = {
  moles: [],
  videoLoaded: false
}

/**
 * ACTION CREATORS
 */
export const gotMoles = moles => ({type: GOT_MOLES, moles})
export const videoLoaded = () => ({type: VIDEO_LOADED})

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_MOLES:
      return {...state, moles: action.moles}
    case VIDEO_LOADED:
      return {...state, videoLoaded: true}
    default:
      return state
  }
}
