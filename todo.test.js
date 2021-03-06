import { todo } from './Reducers/Todo';
import deepFreeze from 'deep-freeze';


it('Able to add Todo item',() => {
    const stateBefore = {} 

    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'test'
    }

    const stateAfter = {
        id: 0,
        text: 'test',
        completed: false
    }

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(todo(stateBefore,action)).toEqual(stateAfter)
})

it('Able to toggle Todo item',() => {
    const stateBefore = {
        id: 0,
        text: 'test',
        completed: false
    } 

    const action = {
        type: 'TOGGLE_TODO',
        id: 0
    }

    const stateAfter = {
        id: 0,
        text: 'test',
        completed: true
    }

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(todo(stateBefore,action)).toEqual(stateAfter)
})