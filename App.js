import React, { Component } from 'react';
import StrAddButton from './StrAddButton';

// index에서 만들어서 보내준 store의 내부 상태(값)을 받아서 str형태로 변형하여 출력할 준비를 하고,
// 버튼에 store를 내려보내준다.
class App extends Component{
  render(){
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.store.getState().data.str}</span>
        <StrAddButton store={this.props.store}/>
      </div>
    )
  }
}

export default App;