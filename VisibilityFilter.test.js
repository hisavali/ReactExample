import { visibilityFilter } from './Reducers/VisibilityFilter';

it('Able to set the defalut value for visibility filter', () => {
    const stateBefore = undefined

    const action = {
    }

    const stateAfter = 'SHOW_ALL'

    expect(visibilityFilter(stateBefore,action)).toEqual(stateAfter)
})

it('Able to set the visibility filter', () => {
    const stateBefore = {}

    const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter:'COMPLETED'
    }

    const stateAfter = 'COMPLETED'

    expect(visibilityFilter(stateBefore,action)).toEqual(stateAfter)
})