import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';

if (((window || {}).history || {}).scrollRestoration) {
    window.history.scrollRestoration = 'manual';
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
