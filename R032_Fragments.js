import React, {Component} from 'react';


// DOM에 div를 추가하지 않고 그룹화 하기 위한 도구
// 불필요한 div를 쓰지 않고 싶을 때 사용한다.
// 하나의 div로 묶여 있는 채 렌더되는 것이 아니라 바디에 각각의 div별로 나눠두고 싶을 때 사용할 듯 싶다.
class R032_Fragments extends Component{
    render() {
        return(
            <React.Fragment>
                <p>P TAG</p>
                <span>SPAN TAG</span>
            </React.Fragment>
        )
    }
}

export default R032_Fragments;