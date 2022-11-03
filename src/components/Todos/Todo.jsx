import styles from "./Todo.module.css";

import { MdOutlineAddTask } from "react-icons/md";
import { useState } from "react";

function Todo(props) {
  const { todo, index, deleteTodo, editTodo } = props;
  const [checked, setChecked] = useState(false);
  const [editText, setEditText] = useState("");
  const [isModalOpened, setModalOpened] = useState(false);
  const addIndex = () => {
    deleteTodo(index);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const saveEditForm = () => {
    editTodo(editText, index);
    setModalOpened(!isModalOpened);
  };
  const editForm = () => {
    setModalOpened(!isModalOpened);
  };

  return (
    <div className={styles.todo}>
      <div className={styles.numbers}>
        <MdOutlineAddTask className={styles.todoIcon} />
        <div className={styles.todoText}>{index + 1}</div>
        <p className={checked ? styles.todoTextDone : ""}> {todo}</p>
      </div>
      <div className={styles.changeProgres}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {!checked && <span>In progress</span>}
        {checked && <span>done</span>}

        <div>
          <button className={styles.button} onClick={editForm}>
            edit
          </button>
          {isModalOpened && (
            <div className={styles.editForm}>
              task: {index + 1}
              <input
                className={styles.editInput}
                type="text"
                onChange={(e) => setEditText(e.target.value)}
              />
              <button className={styles.editButton} onClick={saveEditForm}>
                save
              </button>
            </div>
          )}
          <button
            disabled={checked ? false : true}
            onClick={addIndex}
            className={checked ? styles.button : styles.buttonSilver}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
