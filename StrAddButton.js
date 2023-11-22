import React, {Component} from 'react';
import {add} from "./actions"

// add버튼으로 동작할 버튼을 만들고,
// actions파일에서 가져올 add()가 store에 전달될 수 있도록 준비하기
// dispatch 함수는 리듀서에 액션을 전달하고 리듀서에서는 액션에 작성된 작업 내용을 읽어 스토어 데이터를 변경한다.
class StrAddButton extends Component{
    render() {
        return (
            <input value="Add200" type="button" onClick={this.addString}/>
        );
    }

    addString = () => {
        this.props.store.dispatch(add());
    }
}

export default StrAddButton;