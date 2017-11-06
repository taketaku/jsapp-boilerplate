export interface CountersState {
  value: number;
}

export interface TodosState {
  value: any;
}

export interface State {
  counters: CountersState;
  todos: TodosState;
}

export enum ActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RECEIVE = "RECEIVE"
}

export interface IncrementAction {
  type: ActionTypes.INCREMENT;
  value: number;
}

export interface DecrementAction {
  type: ActionTypes.DECREMENT;
  value: number;
}

export interface ReceiveAction {
  type: ActionTypes.RECEIVE;
  data: any;
}

export type Action = IncrementAction | DecrementAction | ReceiveAction;
