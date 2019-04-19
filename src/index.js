import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
  <BrowserRouter>
    <MainContainer />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
