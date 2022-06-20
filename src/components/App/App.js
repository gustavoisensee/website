import React from 'react';
import Header from '../Header';
import SideMenu from '../SideMenu';
import Content from '../Content';
import './styles.scss';

const App = () => (
  <div className='App'>
    <SideMenu />
    <Header />
    <Content />
  </div>
);

export default App;
