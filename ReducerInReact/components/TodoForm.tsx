import { useState, type Dispatch, type FormEvent } from "react";

import { ADD_TODO, type TodoAction } from "../reducer/actionTypes";

interface TodoFormProps {
  dispatch: Dispatch<TodoAction>;
}

function TodoForm({ dispatch }: TodoFormProps) {

  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if(text.trim() === "") return;

    dispatch({
      type: ADD_TODO,
      payload: text
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Add
      </button>

    </form>
  );
}

export default TodoForm;
