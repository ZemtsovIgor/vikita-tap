import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {WebSocketProvider} from "./providers/webSocketProvider";

import App from "./App";
import store from './store';
// @ts-ignore
const DEFAULT_WEBAPP = typeof window !== 'undefined' && window?.Telegram?.WebApp ? window.Telegram.WebApp : {isExpanded: true};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

if (!DEFAULT_WEBAPP.isExpanded) {
  DEFAULT_WEBAPP?.ready();
  DEFAULT_WEBAPP.expand();
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WebSocketProvider>
        <App />
      </WebSocketProvider>
    </Provider>
  </React.StrictMode>
);
