import React, {Component} from 'react';

class R067_ReactChange extends Component{
    change = (e) => {
        var val = e.target.value;
        console.log('param : '+ val);
    }

    render() {
        return (
            // 앞 예제에서 언급하지 않아 한번 더 사용하였지만 개인적으로 비어있는 태그는
            // 가독성이 좋지 않아 div나 React.Fragment를 사용하고자 한다.
            <>
                <input type="text" onChange={this.change}/>
                <select onChange={this.change}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        );
    }
}

export default R067_ReactChange;