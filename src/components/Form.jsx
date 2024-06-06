import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  const [todo, setTodo] = useState({ name: "", done: false });
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          className={styles.modernInput}
          placeholder="Enter Todo Item"
        />
        <button type="submit" className={styles.modernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
