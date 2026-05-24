import { useReducer } from "react";

import TodoForm from "../components/ToDoForm";
import TodoList from "../components/TodoList";

import { todoReducer } from "../reducer/todoReducer";

import { initialState } from "../reducer/initialState";

function App() {

  const [state, dispatch] = useReducer(
    todoReducer,
    initialState
  );

  return (
    <div style={{ padding: "20px" }}>

      <h1>Todo App</h1>

      <TodoForm dispatch={dispatch} />

      <TodoList
        todos={state.todos}
        dispatch={dispatch}
      />

    </div>
  );
}

export default App;
