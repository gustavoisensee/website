import React from 'react';
import Header from '../Header';
import SideMenuNew from '../SideMenuNew/SideMenuNew';
import Content from '../Content';
import './styles.scss';

const App = () => (
  <div className='w-full max-w-2xl py-8 px-4'>
    <SideMenuNew />
    <Header />
    <Content />
  </div>
);

export default App;
