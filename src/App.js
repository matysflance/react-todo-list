import 'antd/dist/antd.css';
import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
// import { AddTodo } from './Views/AddTodo/AddTodo';
import { TodoDashboard } from './Views/TodoDashboard/TodoDashboard';
import { Layout } from 'antd';

export const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
        {/* <AddTodo /> */}
        <TodoDashboard />
      </Layout>
    </Layout>
  );
};
