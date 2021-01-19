import { useState } from 'react';
import { TodoList } from '../TodoList/TodoList';
import { Card, Button, Form, Input } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

import { Modal } from '../Modal/Modal';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

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
    <>
      <Card
        title={todoList.name}
        bordered={false}
        extra={
          <>
            <Button
              icon={<DeleteOutlined />}
              style={{ paddingLeft: 8, paddingRight: 8 }}
              onClick={() => handleDeleteList(todoList.id)}
            />
            <Button
              icon={<PlusOutlined />}
              type="primary"
              style={{ paddingLeft: 8, paddingRight: 8, marginLeft: 6 }}
              onClick={() => openModal()}
            />
          </>
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
      <Modal isModalVisible={isModalVisible} closeModal={closeModal}>
        <Form {...layout} name="basic" onFinish={handleAddTask}>
          <input type="hidden" name="listId" value={todoList.id} />
          <Form.Item hidden initialValue={todoList.id} name="listId">
            <Input />
          </Form.Item>
          <Form.Item
            label="Task Name"
            name="taskName"
            rules={[{ required: true, message: 'Please input the task name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
