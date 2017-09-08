import React from 'react';
import ReactDOM from 'react-dom';
import Root from './container/Root';
import registerServiceWorker from './common/registerServiceWorker';
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
