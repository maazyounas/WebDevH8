import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from "./actionTypes";
import type { TodoAction, TodoState } from "./actionTypes";

export function todoReducer(state: TodoState, action: TodoAction): TodoState {

  switch(action.type) {

    case ADD_TODO:

      return {
        ...state, //copies all old state value
        todos: [
          ...state.todos, 
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      };

    case DELETE_TODO:

      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        )
      };

    case TOGGLE_TODO:

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
        )
      };

    default:
      return state;
  }
}
