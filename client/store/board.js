/**
 * ACTION TYPES
 */
const GOT_MOLES = 'GOT_MOLES'

/**
 * INITIAL STATE
 */
const initialState = {
  moles: []
}

/**
 * ACTION CREATORS
 */
export const gotMoles = moles => ({type: GOT_MOLES, moles})

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_MOLES:
      return {...state, moles: action.moles}
    default:
      return state
  }
}
