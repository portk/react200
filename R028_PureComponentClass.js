import React,{PureComponent} from 'react';

// PureComponent에서는 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 본다.
// 따라서 값이 동일하다면 변경이 발생되지 않은 것으로 간주하여 render()가 실행되지 않는다.
// 다만 객체에 대해서는 참조 값을 비교하여 다른 객체로 인식된다. 따라서 이땐 render()가 실행된다.
class R028_PureComponentClass extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            StateString: "react",
            StateArrayObj: ["react", { react: "200"}]
        }
    }

    buttonClick = (type) => {
        if(type === "String"){
            this.setState({ StateString: 'react'});
        } else {
            this.setState({ StateArrayObj: ['react', {react: '200'}] });
        }
    }

    render() {
        console.log("render() 실행")
        return (
            <div>
                <button onClick={e => this.buttonClick("String")}>문자열 변경</button>
                <button onClick={e => this.buttonClick("ArrayObject")}>객체 배열 변경</button>
            </div>
        );
    }
}

export default R028_PureComponentClass;