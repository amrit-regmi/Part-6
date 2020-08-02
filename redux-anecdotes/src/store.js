import { createStore ,combineReducers} from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const mergeReducer = combineReducers({
  notification: notificationReducer,
  anectodes: reducer,
  filter:filterReducer,
  
})

const store = createStore(mergeReducer,composeWithDevTools())

export default store