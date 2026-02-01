import { render } from 'preact';
import App from './pages/App';
import locales from './enums/locales';

if (!localStorage.locale) localStorage.locale = locales.EN_US;

const root = document.getElementById('root')!;

render(<App />, root);
