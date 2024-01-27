import ReactDOM from 'react-dom/client';
import App from './pages/App';
import locales from './enum/locales';

if (!localStorage.locale) localStorage.locale = locales.EN_US;

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <App />
)
