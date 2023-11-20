import React, {Component} from 'react';


// onClick이 약속어인 문제로 인해 파일명과 클래스명이 다른 사건이 발생했다.
// app에서 from 파일명을 맞췄고, 불러내는 파일에서 export에 default를 주었다면 해당 파일에서 사용한 클래스명과
// app에서 정해서 쓸 변수명을 다르게 사용할 수도 있다.
// 하지만 그렇게 하면 제작중에 무엇을 불러두었는지 헷갈릴 우려가 매우 크기 때문에 지양하는 것이 좋다.
class R066_ReactonClick extends Component{
    buttonClick = (param => {
        if (typeof param != 'string') param = "Click a"
        console.log("param : " + param);
    })

    render() {
        return (
            <>
                <button onClick={e => this.buttonClick("Click button")}>
                    Click button
                </button>
                <div onClick={e => this.buttonClick("Click div")}>Click div</div>
                <a href="javascript:" onClick={this.buttonClick}>Click a</a>
            </>
        );
    }
}

export default R066_ReactonClick;