import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '../../components/app/Header';
import SideMenu from '../../components/app/SideMenu';
import Content from '../../components/app/Content';
import './styles.css';

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
