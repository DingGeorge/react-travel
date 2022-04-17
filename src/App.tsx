import React from 'react';
import styles from './App.module.scss';
import { HomePage } from './pages';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/sign' element={ <div>登录页</div> } />
          <Route path='*' element={ <div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
