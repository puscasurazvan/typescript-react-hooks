import React, { useState, useRef } from 'react'

const Input = () => {
  const [name, setName] = useState('')
  const ref = useRef<HTMLInputElement>(null!)

  return (
    <input ref={ref} value={name} onChange={event => setName(event.target.value)} />
  )
}

export default Input
