import React from 'react'
import Anecdoteform from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <Notification/>
      <AnecdoteList/>
      <Anecdoteform/>
    </div>
  )
}

export default App