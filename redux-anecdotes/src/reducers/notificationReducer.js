const notificationAtStart = null

export const addNotification = (message,timeout) => {
  return async dispatch => {
    dispatch ({
      type:'NOTIFY',
      message
    })

    setTimeout (() => {
      dispatch({
        type:'REMOVE',
      })
    },timeout)
  }
}

const notificationReducer = (state = notificationAtStart ,action) => {



  switch (action.type){
  case 'NOTIFY':
    return action.message
  case 'REMOVE':
    return null
  default:
    return state
  }
}

export default notificationReducer