import React from 'react'

type Props = {
  title: string, //required
  isActive?: boolean, //optional
}

const Header = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive &&
        <h3>Active</h3>
      }
    </div>
  )
}

export default Header
