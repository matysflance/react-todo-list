import { useState, useEffect, useReducer } from 'react';
import { TodoListCard } from '../../components/TodoListCard/TodoListCard';

import { Row, Col, Layout, Typography, Form, Input, Button } from 'antd';
const { Title } = Typography;
const { Header, Content, Footer } = Layout;

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
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const [todoLists, dispatch] = useReducer(todoReducer, initialTodoLists);

  useEffect(() => {
    forceUpdate({});
  }, []);
  const handleSubmit = (values) => {
    dispatch({ type: TODO_ACTIONS.ADD_LIST, payload: { name: values.todoListName } });
    form.resetFields();
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
    <>
      <Header className="site-layout-background" style={{ height: 'auto', padding: '15px 25px' }}>
        <Title style={{ color: '#fafafa', margin: 0, fontSize: 30 }}>Your Todos</Title>
      </Header>
      <Content style={{ margin: '0 16px' }}>
        <div
          className="site-layout-background"
          style={{ paddingTop: 16, paddingBottom: 16, minHeight: 360 }}
        >
          <Row gutter={[16, 16]}>
            {/* <Col span={10} offset={7}> */}
            <Col xs={24} sm={12}>
              <Form form={form} name="horizontal_login" layout="inline" onFinish={handleSubmit}>
                <Form.Item
                  name="todoListName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input new todo list name!',
                    },
                  ]}
                >
                  <Input placeholder="New list name" />
                </Form.Item>
                <Form.Item shouldUpdate={true}>
                  {() => (
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={
                        !form.isFieldsTouched(true) ||
                        !!form.getFieldsError().filter(({ errors }) => errors.length).length
                      }
                    >
                      Add
                    </Button>
                  )}
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            {todoLists.map((list) => (
              <Col key={list.id} xs={24} md={12} xl={8}>
                <TodoListCard
                  todoList={list}
                  handleDeleteList={handleDeleteList}
                  handleAddTask={handleAddTask}
                  handleDeleteTask={handleDeleteTask}
                  handleToggleTask={handleToggleTask}
                  handleCompleteAll={handleCompleteAll}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </>
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
