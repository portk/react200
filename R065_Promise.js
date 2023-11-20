import React, {Component} from 'react';

class R065_Promise extends Component {
    componentDidMount(){
        new Promise((resolve, reject) => {
            reject(Error("ERROR Info"));
        })
        .then(result => console.log("then "+result))
        .catch(result => console.log("catch : "+result));
        // 개인적으로 책처럼 then과 catch는 전부 내리는게 가독성이 더 좋아보인다.
    }

    render() {
        return(
            <h1>Promise</h1>
        );
    }
}

export default R065_Promise;