export const SUCCESS = '[Todos] success';
export const FAILED = '[Todos] failed';
export const LOAD = '[Todos] load'

export class LoadTodoAction {
    type: string = LOAD
}

export class SuccessAction {
    type: string = SUCCESS;
    payload: any;
    constructor(payload: any) {
        this.payload = payload
    }
}

export class FaildAction {
    type: string = FAILED;
    payload: any;
    constructor(payload: any) {
        this.payload = payload
    }
}