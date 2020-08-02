const notificationAtStart = null

export const addNotification = (message) => {
  return {
    type:'NOTIFY',
    message
  }
}

export const removeNotification = () => {
  return {
    type:'REMOVE',
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