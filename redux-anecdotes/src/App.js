import React from 'react'
import Anecdoteform from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <Filter/>
      <Notification/>
      <AnecdoteList/>
      <Anecdoteform/>
    </div>
  )
}

export default App