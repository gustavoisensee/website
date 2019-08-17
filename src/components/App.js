import React from 'react';
import SideMenu from './SideMenu';
import Header from './Header';
import Content from './Content';
import Projects from './Projects';
import './styles.scss';

const App = () => (
  <div className="App">
    <SideMenu />
    <Header />
    <Content />
    <Projects />
  </div>
);

export default App;
