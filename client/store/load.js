/**
 * ACTION TYPES
 */
const GET_LOADINGSTATE = 'GET_LOADINGSTATE'

/**
 * INITIAL STATE
 */
export const initialState = {
  loading: true
}

/**
 * ACTION CREATORS
 */

export const sendLoadingState = boolean => ({
  type: GET_LOADINGSTATE,
  boolean
})
/**
 * REDUCER
 */

export default function bubble(state = initialState, action) {
  switch (action.type) {
    case GET_LOADINGSTATE:
      return {
        ...state,
        loading: action.boolean
      }
    default:
      return state
  }
}
