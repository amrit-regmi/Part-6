import React from 'react'
import { connect } from 'react-redux'
import {  addAnecdote } from '../reducers/anecdoteReducer'
import { addNotification  } from '../reducers/notificationReducer'

const Anecdoteform = (props) => {

  //const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const newContent = {
      content: content,
      votes:0
    }
    props.addAnecdote(newContent)
    event.target.anecdote.value =''
    props.addNotification(`'${content}' is added`,5)
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

const mapDispatchToProps =  {
  addAnecdote,addNotification
}
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(Anecdoteform )
export default ConnectedAnecdoteForm //Anecdoteform