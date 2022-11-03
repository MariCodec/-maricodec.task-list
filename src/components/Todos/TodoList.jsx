import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList(props) {
  const { todos, deleteTodo, editTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Task list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
