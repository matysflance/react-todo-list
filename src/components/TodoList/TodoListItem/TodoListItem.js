import { ListItem } from './TodoListItem.styles';
import { CustomCheckbox } from '../../CustomCheckbox/CustomCheckbox';

export const TodoListItem = ({ task, listId, handleDeleteTask, handleToggleTask }) => {
  return (
    <ListItem>
      <CustomCheckbox
        name="taskName"
        id={`list_${listId}_task_${task.id}`}
        checked={task.done}
        onChange={() => handleToggleTask(listId, task.id)}
        label={task.name}
      />
      <button onClick={() => handleDeleteTask(listId, task.id)}>Delete task</button>
    </ListItem>
  );
};
