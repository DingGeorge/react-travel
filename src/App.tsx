import React from 'react';
import styles from './App.module.scss';
import {HomePage, Sign, Register, Detail} from './pages';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/sign' element={ <Sign /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='detail'>
            <Route path=':id' element={ <Detail /> } />
          </Route>
          <Route path='*' element={ <div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
