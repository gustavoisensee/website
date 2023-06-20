import React from 'react';
import Header from './components/Header';
import SideMenuNew from './components/SideMenuNew';
import Content from './components/Content';
import './styles.scss';

const App = () => (
  <div className='w-full max-w-2xl py-8 px-4'>
    <SideMenuNew />
    <Header />
    <Content />
  </div>
);

export default App;
