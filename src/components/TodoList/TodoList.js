import { useState } from 'react';
import { TodoListItem } from './TodoListItem/TodoListItem';

// import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { StyledTodoList, Header, Title, Body, Form, Input } from './TodoList.styles';

export const TodoList = ({
  todoList,
  handleDeleteList,
  handleAddTask,
  handleDeleteTask,
  handleToggleTask,
  handleCompleteAll,
}) => {
  console.log(todoList);
  const [newTaskName, setNewTaskName] = useState('');

  const handleNewTaskNameChanged = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    handleAddTask({ listId: todoList.id, taskName: newTaskName });
    setNewTaskName('');
  };

  return (
    <StyledTodoList>
      <Header>
        <Title>{todoList.name}</Title>
        <Button onClick={() => handleDeleteList(todoList.id)}>X</Button>
      </Header>
      <Body>
        {/* <Button onClick={() => console.log('add new task clicked')}>+ New task</Button> */}
        <Form onSubmit={(e) => handleNewTaskSubmit(e)}>
          <Input
            type="text"
            name="taskName"
            value={newTaskName}
            onChange={handleNewTaskNameChanged}
            required
          />
          <Button type="submit">Add task</Button>
        </Form>
        <ul>
          {todoList.tasks.map((task) => (
            <TodoListItem
              key={task.id}
              style={{ paddingLeft: 0, paddingRight: 0 }}
              task={task}
              listId={todoList.id}
              handleDeleteTask={handleDeleteTask}
              handleToggleTask={handleToggleTask}
            />
          ))}
        </ul>
        {todoList.tasks.length > 0 ? (
          <Button
            type="button"
            onClick={() => {
              handleCompleteAll(todoList.id);
            }}
          >
            Mark all as complete
          </Button>
        ) : (
          false
        )}
      </Body>

      {/*
        <form>
          <input type="hidden" name="listId" value={todoList.id} />
          <input type="text" name="taskName" id="taskName" />
          <button type="submit">Add task</button>
        </form>
      */}
    </StyledTodoList>
  );
};
