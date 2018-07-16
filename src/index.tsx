import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouterDom from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './libs/keact/css/common.css'
import './libs/keact/css/flex.css'
import './libs/keact/css/normalize.css'

ReactDOM.render(
  <ReactRouterDom.BrowserRouter>
    <App />
  </ReactRouterDom.BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
