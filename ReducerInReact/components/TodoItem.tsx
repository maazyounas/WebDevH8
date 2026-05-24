import type { Dispatch } from "react";

import {
  DELETE_TODO,
  TOGGLE_TODO
} from "../reducer/actionTypes";
import type { Todo, TodoAction } from "../reducer/actionTypes";

interface TodoItemProps {
  todo: Todo;
  dispatch: Dispatch<TodoAction>;
}

function TodoItem({ todo, dispatch }: TodoItemProps) {

  return (
    <li>

      <span
        onClick={() =>
          dispatch({
            type: TOGGLE_TODO,
            payload: todo.id
          })
        }
        style={{
          textDecoration: todo.completed
            ? "line-through"
            : "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() =>
          dispatch({
            type: DELETE_TODO,
            payload: todo.id
          })
        }
      >
        Delete
      </button>

    </li>
  );
}

export default TodoItem;
