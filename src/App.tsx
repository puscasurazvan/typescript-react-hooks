import React from 'react'
import './App.css'

import Header from './components/Header'
import Button from './components/Button'
import Input from './components/Input'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title='Hello' />
      <Button onClick={(event) => {
        event.preventDefault()
        console.log(event)
      }}>
        Hello world!
      </Button>
      <Input />
    </div>
  )
}

export default App
