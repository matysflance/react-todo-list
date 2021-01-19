import { useState, useEffect, useReducer } from 'react';
import { TodoListCard } from '../../components/TodoListCard/TodoListCard';

const TODO_ACTIONS = {
  ADD_LIST: 'add-list',
  DELETE_LIST: 'delete-list',
  ADD_TASK: 'add-task',
  DELETE_TASK: 'delete-task',
  TOGGLE_TASK: 'toggle-task',
  COMPLETE_ALL_TASKS: 'complete-all-tasks',
};

const todoReducer = (todoLists, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_LIST:
      return [
        {
          id: Date.now(),
          name: action.payload.name,
          tasks: [],
        },
        ...todoLists,
      ];
    case TODO_ACTIONS.DELETE_LIST:
      return todoLists.filter((list) => list.id !== action.payload.listId);
    case TODO_ACTIONS.ADD_TASK:
      console.log(action.payload.taskData);
      return todoLists.map((list) => {
        if (list.id === action.payload.taskData.listId) {
          return {
            ...list,
            tasks: [
              {
                id: Date.now(),
                name: action.payload.taskData.taskName,
              },
              ...list.tasks,
            ],
          };
        }
        return list;
      });
    case TODO_ACTIONS.DELETE_TASK:
      return todoLists.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            tasks: list.tasks.filter((task) => task.id !== action.payload.taskId),
          };
        }
        return list;
      });
    case TODO_ACTIONS.TOGGLE_TASK:
      return todoLists.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.payload.taskId) {
                return {
                  ...task,
                  done: !task.done,
                };
              }
              return task;
            }),
          };
        }
        return list;
      });
    case TODO_ACTIONS.COMPLETE_ALL_TASKS:
      return todoLists.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              return {
                ...task,
                done: true,
              };
            }),
          };
        }
        return list;
      });
    default:
      return todoLists;
  }
};

export const TodoDashboard = () => {
  const [todoLists, dispatch] = useReducer(todoReducer, initialTodoLists);

  const handleSubmit = (values) => {
    dispatch({ type: TODO_ACTIONS.ADD_LIST, payload: { name: values.todoListName } });
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
    <section>
      <header>
        <h1>Your Todos</h1>
      </header>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="todoListName" required />
        <button type="submit">Add</button>
      </form>

      {todoLists.map((list) => (
        <TodoListCard
          todoList={list}
          handleDeleteList={handleDeleteList}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
          handleToggleTask={handleToggleTask}
          handleCompleteAll={handleCompleteAll}
        />
      ))}
      <footer>Created by Sebastian Matysiak</footer>
    </section>
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
