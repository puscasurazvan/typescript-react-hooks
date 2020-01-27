import React from 'react'
import './App.css'

import Header from './components/Header'
import Button from './components/Button'
import Input from './components/Input'
import { GlobalProvider } from './components/GlobalState'
import ReducerButtons from './components/ReducerButtons'

const App: React.FC = () => {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  )
}

export default App
