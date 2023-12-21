import { createRoot } from 'react-dom/client';

import App from './pages/App';
import locales from './enum/locales';

if (!localStorage.locale) localStorage.locale = locales.EN_US;

const root = document.getElementById('root');
createRoot(root).render(<App />);
