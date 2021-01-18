import React from 'react';
import { List, Button } from 'antd';
import { CheckSquareOutlined } from '@ant-design/icons';

import { TodoListItem } from './TodoListItem/TodoListItem';

export const TodoList = ({
  tasks,
  listId,
  handleDeleteTask,
  handleCompleteAll,
  handleToggleTask,
}) => {
  return (
    <form action="">
      <List
        size="small"
        bordered={false}
        dataSource={tasks}
        renderItem={(task) => (
          <TodoListItem
            key={task.id}
            style={{ paddingLeft: 0, paddingRight: 0 }}
            task={task}
            listId={listId}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}
          />
        )}
      />
      {tasks.length > 0 ? (
        <Button
          block
          icon={<CheckSquareOutlined />}
          style={{ marginTop: 10 }}
          onClick={() => {
            handleCompleteAll(listId);
          }}
        >
          Mark all as complete
        </Button>
      ) : (
        false
      )}
    </form>
  );
};
