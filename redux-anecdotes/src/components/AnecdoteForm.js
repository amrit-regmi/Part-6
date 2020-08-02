import React from 'react'
import { useDispatch } from 'react-redux'
import {  addAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification  } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const Anecdoteform = () => {
  const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value =''
    const newContent = {
      content: content,
      votes:0
    }
    const newAnecdote = await anecdoteService.addNew(newContent)
    console.log(newAnecdote)
    dispatch (addAnecdote(newAnecdote))
    dispatch(addNotification(`'${content}' is added`))
    setTimeout(() => dispatch(removeNotification()),5000)
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