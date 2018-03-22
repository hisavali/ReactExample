import { todos } from './Reducers/Todos';
import deepFreeze from 'deep-freeze';

it('Able to add Todo items',() => {
    const stateBefore = [] 

    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'test'
    }

    const stateAfter = [{
        id: 0,
        text: 'test',
        completed: false
    }]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(todos(stateBefore,action)).toEqual(stateAfter)
})


it('Able to toggle Todo item',() => {
    const stateBefore = [{
        id: 0,
        text: 'test',
        completed: false
    },
    {
        id: 1,
        text: 'shop',
        completed: false
    }]

    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }

    const stateAfter = [{
        id: 0,
        text: 'test',
        completed: false
    },
    {
        id: 1,
        text: 'shop',
        completed: true
    }]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(todos(stateBefore,action)).toEqual(stateAfter)
})
