import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App'
import '../assets/scss/screen.scss';
// require('file-loader?name=[name].[ext]!../index.html');

// Create the main application store.
window.store = createStore(reducer);

// This will be used instead of redux for rendering the minimap and nametags.
window.playerData = {};

render(
    <Provider store={window.store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// Enable our mock data and spamming scripts when running in dev.

if (process.env.NODE_ENV !== 'production')
{
    require('./test/mock');
    require('./test/spam');
}

console.log("Test");