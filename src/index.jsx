import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import locales from './enum/locales';

if (!localStorage.locale) localStorage.locale = locales.EN_US;

ReactDOM.render(<App />, document.getElementById('root'));
