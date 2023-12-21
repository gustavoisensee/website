import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import './styles.scss';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className='w-full max-w-2xl py-8 px-4'>
      <SideMenu />
      <Header />
      <Content />
    </div>
  </QueryClientProvider>
);

export default App;
