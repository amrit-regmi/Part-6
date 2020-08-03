export const addNotification = (message,timeout) => {
  return async dispatch => {

    const timeoutid =  setTimeout (() => {
      dispatch({
        type:'REMOVE',
      })
    },timeout * 1000)

    dispatch ({
      type:'NOTIFY',
      data : {
        message,
        timeoutId: timeoutid
      }
    })
  }
}

const notificationReducer = (state = { message:null,timeoutId:null } ,action) => {

  switch (action.type){
  case 'NOTIFY':
    return action.data
  case 'REMOVE':
    return { message:null,timeoutId:null }
  default:
    return state
  }
}

export default notificationReducer