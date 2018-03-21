import { todo } from './Todo';
//import { deepFreeze } from 'deep-freeze';
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

    //deepFreeze(stateBefore)
    //deepFreeze(action)

    expect(todo(stateBefore,action)).toEqual(stateAfter)
})