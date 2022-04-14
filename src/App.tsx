import React from 'react';
import {
  Layout, Input, Dropdown, Menu, Button,
} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import styles from './App.module.scss';
import logo from './logo.svg';

const { Header } = Layout;
const { Search } = Input;
const languageMenu = (
  <Menu>
    <Menu.Item>中文</Menu.Item>
    <Menu.Item>English</Menu.Item>
  </Menu>
);
const mainMenuList = [
  '旅游首页',
  '周末游',
  '跟团游',
  '自由行',
  '邮轮',
  '签证',
  '机票',
  '酒店',
  '景点门票',
  '攻略',
];
function App() {
  return (
    <div className={styles.App}>
      {/*  一级顶部栏 */}
      <Header className={styles['top-header']}>
        <span>让旅游更幸福</span>
        <Dropdown.Button className={styles['language-select']} overlay={languageMenu} icon={<GlobalOutlined />}>
          语言
        </Dropdown.Button>
        <div className={styles['btn-group']}>
          <Button>登录</Button>
          <Button>注册</Button>
        </div>
      </Header>
      {/*  二级顶部栏 */}
      <Header className={styles['second-header']}>
        <img className={styles.logo} src={logo} alt="" />
        <p className={styles.title}>React 旅游网</p>
        <Search className={styles['search-input']} placeholder="请输入旅游目的地、主题、或关键字" />
      </Header>
      {/*  菜单栏 */}
      <Menu className={styles['main-menu']} mode="horizontal">
        {
          mainMenuList.map((item) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))
        }
      </Menu>
      {/*  底部栏 */}
      <div className={styles.footer}>
        <span>版权所有 @React 旅游网</span>
      </div>
    </div>
  );
}

export default App;
