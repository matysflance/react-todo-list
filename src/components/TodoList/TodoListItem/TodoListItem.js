import { ListItem } from './TodoListItem.styles';
import { CustomCheckbox } from '../../CustomCheckbox/CustomCheckbox';
import { Button } from '../../Button/Button';

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
      <Button type="button" onClick={() => handleDeleteTask(listId, task.id)}>
        X
      </Button>
    </ListItem>
  );
};
