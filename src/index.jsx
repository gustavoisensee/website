import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Market from './enum/Market';

if (!localStorage.market) localStorage.market = Market.EN_US;

ReactDOM.render(<App />, document.getElementById('root'));
