import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import reducers from "./reducers";

// 78~80번의 실행결과는 80번에서 확인한다.
// redux는 컨텍스트처럼 데이터를 필요한 컴포넌트에서만 요청해 사용할 수 있다.
// 컨텍스트는 부모 컴포넌트에서 생성한 데이터에 모든 자식 컴포넌트에서 접근할 수 있다.
// 리덕스는 컴포넌트 외부의 스토어라는 곳에서 관리하여 컴포넌트의 위치와 상관없이 스토어에 접근해 데이터를 사용하고 변경할 수 있다.

const store = createStore(reducers);

const listener = ()=> {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById("root")  
  );
};

store.subscribe(listener);
listener();