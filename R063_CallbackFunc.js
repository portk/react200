import React, {Component} from 'react';

// 비동기적으로 동작하는 자바스크립트에서 순서대로 함수가 동작하게 하는 방법중 1개.
// 아래는 미리 콜백함수로 저장해두고 하는 방식이다.
// 순서대로 동작한다는 매력에 빠져 1 -> 2 -> 3 -> 4 -> 5 ... 처럼 만들게 된다면 코드가 지저분해지며,
// 이를 콜백 지옥이라고 말한다고 한다. 사용에 적당한 자제가 요구된다.
class R063_CallbackFunc extends Component{
    componentDidMount(){
        this.logPrint(1, function(return1){
            console.log("return : "+return1);
            this.logPrint(return1, function(return2){
                console.log("return2 : "+return2);
            })
        }.bind(this))
    }

    logPrint(param, callback) {
        console.log("logPrint param : "+param);
        param += param
        callback(param);
    }

    render() {
        return (
            <h1>Callback Function</h1>
        );
    }
}

export default R063_CallbackFunc;