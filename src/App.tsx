import React from 'react'
import './App.css'

import Header from './components/Header'
import Button from './components/Button'
import Input from './components/Input'
import ReducerButtons from './components/ReducerButtons'

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
      <ReducerButtons />
      <Input />
    </div>
  )
}

export default App
