import { render } from 'react-dom';

import App from './components/pages/App';
import locales from './enum/locales';

if (!localStorage.locale) localStorage.locale = locales.EN_US;

render(<App />, document.getElementById('root'));
