import { customAction } from '../store';
import { INCREAMENT, DECREAMENT } from '../actions/counter.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Counter {
    n: number
}
let initialState: Counter = {
    n: 0
};



export function counterReducer(state = initialState, action: customAction) {
    switch (action.type) {
        case INCREAMENT:
            return {
                ...state,
                n: state.n + action.payload
            }
        case DECREAMENT:
            return {
                ...state,
                n: state.n - action.payload
            }

        default:
            return state
    }
}

let counterFs = createFeatureSelector<Counter>('counter');
export let nSelector = createSelector(counterFs, state => state.n)



