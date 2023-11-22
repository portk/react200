import React, {Component} from 'react';
import {connect} from "react-redux";
import {add} from "./actions"

class StrAddButton extends Component{
    render() {
        return (
            //<input value="Add200" type="button" onClick={this.addString}/>
            <input value="Add200" type="button" onClick={this.props.addString}/>
        );
    }

    // 기존에 dispatch 함수를 호출하기 위해 컴포넌트 내에 선언했던 함수.
    // 두 함수를 바인딩했기 때문에 별도의 선언은 불필요해졌다
    // addString = () => {
    //     this.props.store.dispatch(add());
    // }
}

// 첫번째 파라미터로 dispatch 함수를, 두번째 파라미터로 부모 컴퍼넌트에서 전달한 props 변수를 받는다
// App.js에서 전달한 props 변수 AppProp을 콘솔에 출력한다.
// dispatch 함수를 addString에 바인딩한다. 이때 addString 함수는 props에 할당된다
let mapDispatchToProps = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProp)
    return {
        addString : () => dispatch(add())
    };
};

// connect 함수의 두 번째 파라미터로 넣어주기
StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;