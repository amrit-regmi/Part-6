import React from 'react'
import { useDispatch } from 'react-redux'
import {  addAnecdote } from '../reducers/anecdoteReducer'

const Anecdoteform = () => {
  const dispatch = useDispatch()

  const create = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value =''
    dispatch (addAnecdote(content))
  }

  return(
    <>
      <h2>create new</h2>
      <form onSubmit ={create}>
          <div><input name='anecdote'/></div>
          <button type = 'submit' > create</button>
        </form>
    </>
  )
}

export default Anecdoteform