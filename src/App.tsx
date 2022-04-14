import React from 'react';
import { Layout, Input } from 'antd';
import styles from './App.module.css';
import logo from './logo.svg';

const { Header } = Layout;
const { Search } = Input;

function App() {
  return (
    <div className={styles.App}>
      <Header>
        <img src={logo} alt="" />
        <h3>React 旅游网</h3>
        <Search placeholder="请输入旅游目的地、主题、或关键字" />
      </Header>
    </div>
  );
}

export default App;
