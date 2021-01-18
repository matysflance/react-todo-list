import { List, Checkbox, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './TodoListItem.css';

export const TodoListItem = ({ task, listId, handleDeleteTask, handleToggleTask }) => {
  return (
    <List.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Checkbox onChange={() => handleToggleTask(listId, task.id)} checked={task.done}>
        {task.name}
      </Checkbox>
      <Button
        icon={<CloseOutlined />}
        style={{ paddingLeft: 8, paddingRight: 8 }}
        onClick={() => handleDeleteTask(listId, task.id)}
      />
    </List.Item>
  );
};
