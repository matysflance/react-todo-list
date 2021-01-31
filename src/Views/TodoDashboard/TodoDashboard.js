import { useState, useReducer } from 'react';
import { TodoList } from '../../components/TodoList/TodoList';
import { TODO_ACTIONS } from '../../actions/todoActions';
import { todoReducer } from '../../reducers/todoReducer';

import { StyledTodoDashboard, Header, Form, TodosWrapper } from './TodoDashboard.styles';
import { Button } from '../../components/Button/Button';

export const TodoDashboard = () => {
  const [newListName, setNewListName] = useState('');
  const [todoLists, dispatch] = useReducer(todoReducer, initialTodoLists);

  const handleNewListInput = (e) => {
    setNewListName(e.target.value);
  };

  const handleNewListSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: TODO_ACTIONS.ADD_LIST, payload: { name: newListName } });
    setNewListName('');
  };
  const handleDeleteList = (listId) => {
    dispatch({ type: TODO_ACTIONS.DELETE_LIST, payload: { listId: listId } });
  };
  const handleAddTask = (taskData) => {
    dispatch({ type: TODO_ACTIONS.ADD_TASK, payload: { taskData: taskData } });
  };
  const handleDeleteTask = (listId, taskId) => {
    dispatch({ type: TODO_ACTIONS.DELETE_TASK, payload: { listId: listId, taskId: taskId } });
  };
  const handleToggleTask = (listId, taskId) => {
    dispatch({ type: TODO_ACTIONS.TOGGLE_TASK, payload: { listId: listId, taskId: taskId } });
  };
  const handleCompleteAll = (listId) => {
    dispatch({ type: TODO_ACTIONS.COMPLETE_ALL_TASKS, payload: { listId: listId } });
  };

  return (
    <StyledTodoDashboard>
      <Header>
        <h1>Your Todos</h1>
      </Header>
      <div className="container">
        <Form onSubmit={(e) => handleNewListSubmit(e)}>
          <input
            type="text"
            name="todoListName"
            value={newListName}
            onChange={handleNewListInput}
            required
          />
          <Button type="submit">Add new list</Button>
        </Form>
      </div>

      <TodosWrapper>
        {todoLists.map((list) => (
          <TodoList
            key={list.id}
            todoList={list}
            handleDeleteList={handleDeleteList}
            handleAddTask={handleAddTask}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}
            handleCompleteAll={handleCompleteAll}
          />
        ))}
      </TodosWrapper>
    </StyledTodoDashboard>
  );
};

const initialTodoLists = [
  {
    id: 1,
    name: 'List 1',
    tasks: [
      {
        id: 1,
        name: 'Name 1',
        done: false,
      },
      {
        id: 2,
        name: 'Name 2',
        done: false,
      },
      {
        id: 3,
        name: 'Name 3',
        done: true,
      },
      {
        id: 4,
        name: 'Name 4',
        done: false,
      },
    ],
  },
  {
    id: 2,
    name: 'List 2',
    tasks: [
      {
        id: 1,
        name: 'Name 1',
        done: false,
      },
      {
        id: 2,
        name: 'Name 2',
        done: false,
      },
      {
        id: 3,
        name: 'Name 3',
        done: true,
      },
      {
        id: 4,
        name: 'Name 4',
        done: false,
      },
    ],
  },
  {
    id: 3,
    name: 'List 3',
    tasks: [
      {
        id: 1,
        name: 'Name 1',
        done: false,
      },
      {
        id: 2,
        name: 'Name 2',
        done: false,
      },
      {
        id: 3,
        name: 'Name 3',
        done: true,
      },
      {
        id: 4,
        name: 'Name 4',
        done: false,
      },
    ],
  },
  {
    id: 4,
    name: 'List 4',
    tasks: [
      {
        id: 1,
        name: 'Name 1',
        done: false,
      },
      {
        id: 2,
        name: 'Name 2',
        done: false,
      },
      {
        id: 3,
        name: 'Name 3',
        done: true,
      },
      {
        id: 4,
        name: 'Name 4',
        done: false,
      },
    ],
  },
];
