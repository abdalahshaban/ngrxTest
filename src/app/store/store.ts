import { Action, ActionReducerMap } from "@ngrx/store";
import { Counter, counterReducer } from './reducers/counter.reducer';
import { todosReducer, Todo } from './reducers/todos.reducers';

export interface StoreInterface {
    counter: Counter,
    todos: Todo[]
}

export interface customAction {
    type: string;
    payload: any;
}


export const reducers: ActionReducerMap<StoreInterface> = { counter: counterReducer, todos: todosReducer }