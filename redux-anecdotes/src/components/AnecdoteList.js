import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification  } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = 
    useSelector( state => {
    const filteredList = [...state.anectodes].filter(anecdote => anecdote.content.includes(state.filter))
    const anecdotelist= filteredList.sort((a,b)=> b.votes-a.votes)
    return anecdotelist
  })

  const dispatch = useDispatch()

  const vote = (anectode) => {
    dispatch(addVote(anectode.id))
    dispatch(addNotification(`You voted '${anectode.content}' `)) 
    setTimeout(() => dispatch(removeNotification()),5000)
  }

  return (
    <>
    <h2>Anecdotes</h2>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
  
}

export default AnecdoteList