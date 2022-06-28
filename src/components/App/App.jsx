import React from 'react';
import Header from '../Header';
import SideMenu from '../SideMenu';
import Content from '../Content';
import './styles.scss';

const App = () => (
  <div className='w-full max-w-lg p-4'>
    <SideMenu />
    <Header />
    <Content />
  </div>
);

export default App;
