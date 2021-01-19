import './TodoListItem.css';

export const TodoListItem = ({ task, listId, handleDeleteTask, handleToggleTask }) => {
  return (
    <li>
      <label htmlFor="checkbox">{task.name}</label>
      <input
        type="checkbox"
        name="taskName"
        id="taskName"
        checked={task.done}
        onChange={() => handleToggleTask(listId, task.id)}
      />
      <button onClick={() => handleDeleteTask(listId, task.id)}>Delete task</button>
    </li>
  );
};
