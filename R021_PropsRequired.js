import React, {Component} from "react";


// ReactString이 오류문구를 내보낼 것이라 했지만 실제로는 그렇지 않았다.
// 실행단계에서는 오류문 없이 undefined상태로 진행되었다.
class R021_PropsRequired extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
        );
    }
}

export default R021_PropsRequired;