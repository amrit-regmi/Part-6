import React ,{ useEffect } from 'react'
import Anecdoteform from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initialize } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialize())
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