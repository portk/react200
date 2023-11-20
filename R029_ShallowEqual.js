import React, {Component} from 'react';
import {shallowEqualArrays} from "shallow-equal";


// 값만 비교하여 true/false를 나누는데 객체의 경우 참조 값이 다르게 되므로 false가 나왔다.
// PureComponent와 비슷한 상황
class R029_ShallowEqual extends Component{
    constructor(props){
        super(props);
        this.state={ StateString: "react"}
    }

    shouldComponentUpdate(nextProps, nextState){
        return !shallowEqualArrays(this.state, nextState)
    }

    componentDidMount(){
        const object = {react:"200"};
        const Array1 = ["리액트",object];
        const Array2 = ["리액트",object];
        const Array3 = ["리액트", { react: "200"}];
        
        console.log("shallowEqualArray(Array1, Array2) : " + shallowEqualArrays(Array1, Array2));
        console.log("shallowEqualArray(Array2, Array3) : " + shallowEqualArrays(Array2, Array3));
        this.setState({StateString: "react"});
    }

    render(){
        console.log("render() 실행")
        return(
            <div></div>
        );
    }
}

export default R029_ShallowEqual;