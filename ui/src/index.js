import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import reducer from './reducers'
import App from './containers/App'
import '../assets/scss/screen.scss';
// require('file-loader?name=[name].[ext]!../index.html');

Sentry.init({
  dsn: "https://36c9abe3e282439fb96b01acc3a55ccf@o90041.ingest.sentry.io/5564110",
  autoSessionTracking: true,
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

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