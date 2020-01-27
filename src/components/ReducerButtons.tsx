import React, { useReducer, useRef } from 'react'
import { useClickOutside } from './useClickOutside'

const initialState = {
  rValue: true,
}

type Action = { type: 'one' } | { type: 'two' }

type State = {
  rValue: boolean,
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'one':
      return { rValue: true }
    case 'two':
      return { rValue: false }
    default:
      return state
  }
}

const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const ref = useRef<HTMLDivElement>(null!)
  useClickOutside(ref, ()=>{
    console.log('clicked outside')
  })

  return (
    <div ref={ref} >
      {state && state.rValue && 
        <h1>Visible</h1>
      }
      <button onClick={() => dispatch({type: 'one'})}>Action One</button>
      <button onClick={() => dispatch({type: 'two'})}>Action Two</button>
    </div> 
  )
}

export default ReducerButtons
