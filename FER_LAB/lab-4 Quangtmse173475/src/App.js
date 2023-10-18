import logo from './logo.svg';
import './App.css';

import Main from './components/Main';
import { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';
import { Route, Router, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const { dark, theme, toggle } = useContext(ThemeContext)
  return (
    <div className="App" style={{ backgroundColor: theme.backgroundcolor, color: theme.color }}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail/:id' element={<Detail />} ></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
