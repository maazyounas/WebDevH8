export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export type TodoAction =
  | {
      type: typeof ADD_TODO;
      payload: string;
    }
  | {
      type: typeof DELETE_TODO;
      payload: number;
    }
  | {
      type: typeof TOGGLE_TODO;
      payload: number;
    };
