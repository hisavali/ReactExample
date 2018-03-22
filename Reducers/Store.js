import { todos } from './Todos'
import { visibilityFilter } from './VisibilityFilter'

import { combineReducers } from 'redux'
import { createStore } from 'redux'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export const store = createStore(todoApp)
