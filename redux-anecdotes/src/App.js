import React ,{ useEffect } from 'react'
import Anecdoteform from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { initialize } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => {
      dispatch(initialize(anecdotes))
    })
  })

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