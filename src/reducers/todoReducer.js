import { TODO_ACTIONS } from '../actions/todoActions';

export const todoReducer = (todoLists, action) => {
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
