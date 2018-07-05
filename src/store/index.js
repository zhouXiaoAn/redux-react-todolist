import {createStore} from 'redux'
import {addTodoList} from './reducers'
export const store = createStore(addTodoList)