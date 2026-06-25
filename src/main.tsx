import './fonts.css';
import { render } from 'preact';
import locales from './enums/locales';
import { loadLocale } from './helpers';

if (!localStorage.locale) localStorage.locale = locales.EN_US;

const root = document.getElementById('root')!;

await loadLocale();
const { default: App } = await import('./pages/App');
render(<App />, root);
