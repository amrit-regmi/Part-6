import React from 'react'
import { useDispatch } from 'react-redux'
import {  addAnecdote } from '../reducers/anecdoteReducer'
import { addNotification  } from '../reducers/notificationReducer'

const Anecdoteform = () => {
  const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const newContent = {
      content: content,
      votes:0
    }
    dispatch (addAnecdote(newContent))
    event.target.anecdote.value =''
    dispatch(addNotification(`'${content}' is added`,5000))
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