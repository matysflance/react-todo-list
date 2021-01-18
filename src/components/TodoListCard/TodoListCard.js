import { TodoList } from '../TodoList/TodoList';
import { Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const TodoListCard = ({
  todoList,
  handleDeleteList,
  handleDeleteTask,
  handleToggleTask,
  handleCompleteAll,
}) => {
  return (
    <Card
      title={todoList.name}
      bordered={false}
      extra={
        <Button
          icon={<DeleteOutlined />}
          style={{ paddingLeft: 8, paddingRight: 8 }}
          onClick={() => handleDeleteList(todoList.id)}
        />
      }
    >
      <TodoList
        tasks={todoList.tasks}
        listId={todoList.id}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
        handleCompleteAll={handleCompleteAll}
      />
    </Card>
  );
};
