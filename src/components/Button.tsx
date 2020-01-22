import React from 'react'

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
