import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from "./components/reducers";

const store = createStore(reducers);

const listener = ()=> {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
    document.getElementById("root")  
  );
};

store.subscribe(listener);
listener();