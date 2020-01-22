import React from 'react'

type Props = {
  onClick: (text: string) => void //function with string param
}

const Button = ({ onClick}: Props) => {
  return (
    <button onClick={() => onClick('Hi')}>
      Click Me!
    </button>
  )
}

export default Button
