import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Main from './Main';
import './main.css';
import configureStore from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const rootElement = document.getElementById('root');
const renderApp = AppComponent => {
    ReactDOM.render(<AppComponent store={store} />, rootElement);
};

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

renderApp(Main);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./Main', () => {
        const NewRoot = require('./Main').default;
        renderApp(NewRoot);
    });
}
