const notificationAtStart = 'This is demo notification'

const notificationReducer = (state = notificationAtStart ,action) => {
  switch (action.type){
    case 'NOTIFY':
      return action.message
    default:
      return state
  }
} 

export default notificationReducer