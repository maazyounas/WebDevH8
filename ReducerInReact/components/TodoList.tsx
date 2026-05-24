import type { Dispatch } from "react";

import TodoItem from "./TodoItem";
import type { Todo, TodoAction } from "../reducer/actionTypes";

interface TodoListProps {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
}

function TodoList({ todos, dispatch }: TodoListProps) {

  return (
    <ul>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />
      ))}

    </ul>
  );
}

export default TodoList;
