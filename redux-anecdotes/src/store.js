import { createStore ,combineReducers} from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const mergeReducer = combineReducers({
  notification: notificationReducer,
  anectodes: reducer
})

const store = createStore(mergeReducer)

export default store