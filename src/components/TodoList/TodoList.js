import { useState } from 'react';
import { TodoListItem } from './TodoListItem/TodoListItem';

// import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { StyledTodoList, Header, Title, Body } from './TodoList.styles';

export const TodoList = ({
  todoList,
  handleDeleteList,
  handleAddTask,
  handleDeleteTask,
  handleToggleTask,
  handleCompleteAll,
}) => {
  console.log(todoList);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledTodoList>
      <Header>
        <Title>{todoList.name}</Title>
        <Button onClick={() => handleDeleteList(todoList.id)}>X</Button>
      </Header>
      <Body>
        <Button onClick={() => openModal()}>+ New task</Button>
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
          <button
            type="button"
            onClick={() => {
              handleCompleteAll(todoList.id);
            }}
          >
            Mark all as complete
          </button>
        ) : (
          false
        )}
      </Body>

      {/* <Modal isModalVisible={isModalVisible} closeModal={closeModal}>
        <form>
          <input type="hidden" name="listId" value={todoList.id} />
          <input type="text" name="taskName" id="taskName" />
          <button type="submit">Add task</button>
        </form>
      </Modal> */}
    </StyledTodoList>
  );
};
