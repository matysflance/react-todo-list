import { TodoListItem } from './TodoListItem/TodoListItem';

export const TodoList = ({
  tasks,
  listId,
  handleDeleteTask,
  handleCompleteAll,
  handleToggleTask,
}) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <TodoListItem
            key={task.id}
            style={{ paddingLeft: 0, paddingRight: 0 }}
            task={task}
            listId={listId}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}
          />
        ))}
      </ul>
      {tasks.length > 0 ? (
        <button
          type="button"
          onClick={() => {
            handleCompleteAll(listId);
          }}
        >
          Mark all as complete
        </button>
      ) : (
        false
      )}
    </>
  );
};
