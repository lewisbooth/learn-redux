// Reducers are pure functions that take in the action and a copy of current state, then return the new state
export function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we are updating
       {...state[i], likes: state[i].likes + 1}, // only change the index
        ...state.slice(i + 1) // after the one we are updating
      ]
    default:
      return state
  }
}