import { customAction } from '../store';
import { SUCCESS, FAILED } from '../actions/todo.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Todo {
    userid: number,
    id: number,
    title: string,
    completed: boolean
}


export function todosReducer(state: Todo[], action: customAction) {
    switch (action.type) {
        case SUCCESS:
            return action.payload
        case FAILED:
            console.log('error', action.payload);
            return state

        default:
            break;
    }
}


let todosFs = createFeatureSelector<Todo[]>('todos');
export let todosSelector = createSelector(todosFs, state => state)