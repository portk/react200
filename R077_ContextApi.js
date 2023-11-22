import React from "react";
import Children from "./contextChildren";

const {Provider, Consumer} = React.createContext();
export {Consumer}

// Props는 데이터가 부모에서 자식 방향으로만 이동할 수 있다.
// 따라서 하위에서 바꿀 수 있게 하기 위해 Context에 변경하는 함수를 묶어서 보내준다.
// callback 함수 내려보내기와 비슷하게 느껴진다.
// 하지만 Context는 함수 외의 값도 보내줄 수 있는게 장점으로 보인다.
class R077_ContextApi extends React.Component{
    constructor(props){
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value){
        this.setState({name : value});
    }

    render() {
        const content ={
            ...this.state,
            setStateFunc: this.setStateFunc
        }
        return (
            <Provider value={content}>
                <Children />
            </Provider>
        );
    }
}

export default R077_ContextApi;