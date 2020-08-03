import React from 'react'
import { useDispatch,connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
  const anecdotes = () => {
    const filteredList = [...props.anectodes].filter(anecdote => anecdote.content.includes(props.filter))
    const anecdotelist= filteredList.sort((a,b) => b.votes-a.votes)
    return anecdotelist
  }
  /*useSelector( state => {
      const filteredList = [...state.anectodes].filter(anecdote => anecdote.content.includes(state.filter))
      const anecdotelist= filteredList.sort((a,b) => b.votes-a.votes)
      return anecdotelist
    })*/



  const dispatch = useDispatch()

  let timeoutId = props.notification.timeoutId//useSelector( state => state.notification.timeoutId )

  const vote = (anectode) => {

    dispatch(addVote(anectode))
    clearTimeout(timeoutId)
    dispatch(addNotification(`You voted '${anectode.content}' `,5))
  }

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes().map(anecdote =>
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

const mapStateToProps = (state) => {
  return {
    anectodes: state.anectodes,
    filter: state.filter,
    notification: state.notification
  }
}
const ConncetedAnectodeList = connect(mapStateToProps)(AnecdoteList)
export default ConncetedAnectodeList
//export default AnecdoteList