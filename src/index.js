import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import reducers from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import middleware from './middleware'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers,middleware)

ReactDOM.render(<Provider store={store}>
<App />
</Provider>, document.getElementById('root'))