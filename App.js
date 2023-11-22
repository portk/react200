import React, { Component } from 'react';
import {connect} from "react-redux";
import StrAddButton from './StrAddButton';

// index에서 만들어서 보내준 store의 내부 상태(값)을 받아서 str형태로 변형하여 출력할 준비를 하고,
// 버튼에 store를 내려보내준다.
class App extends Component{
  render(){
    return (
      <div>
        <h1>Start React 200!</h1>
        {/* <span>{this.props.store.getState().data.str}</span> */}
        <span>{this.props.str}</span>
        {/* <StrAddButton store={this.props.store}/> */}
        {/* index.js에서 Provider를 사용했기 때문에 전달하지 않아도 된다 */}
        <StrAddButton AppProp="200"/>
      </div>
    )
  }
}

// 스토어의 state를 두 번째 파라미터로 부모 컴포넌트에서 전달한 props 변수를 받는다.
// 그 후 index.js에서 전달한 prop 변수 indexProp을 콘솔에 출력한다.
// 리턴을 통해 스토어의 state 변수 str 값을 App컴포넌트 props의 str 변수로 할당한다.
let mapStateToProps = (state, props) => {
  console.log("Props from index.js: " + props.indexProp)
  return{
    str: state.data.str,
  };
};

// connect는 4개의 파라미터를 받을 수 있다.
// 이중 첫 번째 파라미터로, 스토어의 state 값에 접근 할 수 있게하는 함수를 집어 넣는다.
App = connect(mapStateToProps, null)(App);



export default App;