import { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export const Sidebar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggle = () => setSidebarCollapsed((prevState) => !prevState);

  return (
    <Sider collapsible collapsed={sidebarCollapsed} onCollapse={toggle}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">Your Todos</Menu.Item>
      </Menu>
    </Sider>
  );
};
