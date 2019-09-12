import React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'push':
      return [action.value, ...state]
    case 'pop':
      if (state.length <= 1) return state

      return state.slice(1)
    default:
      return state
  }
}

export default function useStack(initial) {
  const [state, dispatch] = React.useReducer(reducer, initial)

  return {
    current: state[0],
    push: value => dispatch({ type: 'push', value }),
    pop: () => dispatch({ type: 'pop' }),
  }
}
