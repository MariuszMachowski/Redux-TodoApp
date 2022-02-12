import { createStore, combineReducers } from 'redux';
import tasks from './reducers/taskReducer';
import filter from './reducers/filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
const rootReducer = combineReducers({ tasks, filter })
const store = createStore(rootReducer, composeWithDevTools());
export default store;