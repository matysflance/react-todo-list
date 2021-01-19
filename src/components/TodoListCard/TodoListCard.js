import { useState } from 'react';
import { TodoList } from '../TodoList/TodoList';

import { Modal } from '../Modal/Modal';

export const TodoListCard = ({
  todoList,
  handleDeleteList,
  handleAddTask,
  handleDeleteTask,
  handleToggleTask,
  handleCompleteAll,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <article>
      <button onClick={() => handleDeleteList(todoList.id)}>Delete list</button>
      <button onClick={() => openModal()}>Add task to list</button>
      <TodoList
        tasks={todoList.tasks}
        listId={todoList.id}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
        handleCompleteAll={handleCompleteAll}
      />
      <Modal isModalVisible={isModalVisible} closeModal={closeModal}>
        <form>
          <input type="hidden" name="listId" value={todoList.id} />
          <input type="text" name="taskName" id="taskName" />
          <button type="submit">Add task</button>
        </form>
      </Modal>
    </article>
  );
};
