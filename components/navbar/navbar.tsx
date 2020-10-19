import React, {useState} from 'react'
import Link from 'next/link'
import { Menu, Button } from 'antd';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Navbar = () => {

  const [ collapsed, setCollapsed] = useState(true)
  

  const toggleCollapsed = () => {
    const currentCollapsed = !collapsed;
    setCollapsed( currentCollapsed );
  };

 
    return (
      <div>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16, zIndex:101, position:'absolute', margin:'10px' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          className="navbar-mobile"
          style={{height:'100%', minHeight:'95vh'}}
        >
         <Menu.Item key="1" icon={<PieChartOutlined />} style={{marginTop:'74px'}}>
             <Link href="/"> Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link href="/posts"> Posts</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One" style={{display: collapsed? 'none': 'inline-block'}}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
        <div className="overlay" onClick={() => setCollapsed(true)} style={{display: collapsed? 'none': 'block'}}></div>
        <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
      <style jsx global>{`
        .navbar-mobile {
          width:300px;
          z-index:100;
          position:absolute;
        }
        .overlay {
          background:#cccc;
          position:absolute;
          top:0;
          width:100vw;
          z-index:-1;
          height:100%;
          min-height:100vh;
        }
        .ant-menu-inline-collapsed {
          width:0;
        }
      `}</style>
     
      </div>
    );
  
}


export default Navbar