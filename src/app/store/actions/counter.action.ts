export const INCREAMENT = '[Counter] increament';
export const DECREAMENT = '[Counter] decreament';

export class IncreamentAction {
    type: string = INCREAMENT;
    payload: number

    constructor(payload: number) {
        this.payload = payload
    }
}
export class DecreamentAction {
    type: string = DECREAMENT;
    payload: number

    constructor(payload: number) {
        this.payload = payload
    }
}