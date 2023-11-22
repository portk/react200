import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from "./components/reducers";

// redux 미들웨어란?
// action을 dispatch 함수로 전달하고 reducer가  실행되기 전과 실행된 후에 처리되는 기능을 말한다.
// redux 패키지에서 지원하는 applyMiddleware 함수를 사용하면 미들웨어를 간단하게 구현할 수 있다.
const CallMiddleware = store => nextMiddle => action => {
  console.log('1. reducer 실행전');
  console.log('2. action.type : '+action.type+', store str : '+store.getState().data.str);
  let result = nextMiddle(action);
  console.log('3. reducer 실행 후');
  console.log('4. action.type : '+action.type+', store str : '+store.getState().data.str);
  return result;
}

const store = createStore(reducers, applyMiddleware(CallMiddleware));

const listener = ()=> {
  ReactDOM.render(
    <Provider store={store}>
      <App indexProp="react"/>
    </Provider>,
    document.getElementById("root")
  );
};

store.subscribe(listener);
listener();