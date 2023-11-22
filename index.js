import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from "./components/reducers";

// 83번 예제에서 확인
// store 상속을 위해 Provider를 import해 사용한다.
// app에게 상속을 했기 때문에 모든 컴포넌트에서 store를 사용할 수 있게 되었다.

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