/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
*/

import anecdoteService from '../services/anecdotes'

export const addAnecdote = (data) => {
  return async dispatch => {
    const anecdote = await anecdoteService.addNew(data)
    dispatch({
      type:'ADD',
      data: anecdote
    })
  }
}

export const addVote = (data) => {
  return async dispatch => {

    const anecdote = await anecdoteService.update({ ...data,votes:data.votes+1 })
    dispatch({
      type:'VOTE',
      data : anecdote
    })
  }

}
export const initialize = () => {
  return async dispatch => {
    const anecdotes = await  anecdoteService.getAll()
    dispatch({
      type:'INIT',
      data: anecdotes
    })
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
  case 'ADD':
    return [...state,action.data]

  case 'VOTE':
    return (
      state.map(anecdote => {
        if(anecdote.id === action.data.id){
          anecdote = action.data
        }
        return anecdote
      }))
  case 'INIT':
    return action.data


  default: return state
  }

}

export default reducer