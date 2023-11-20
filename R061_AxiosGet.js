import React, {Component} from 'react';
import axios from "axios";

// 순수 자바스크립트보다 axios의 import가 매우 편리하게 느껴진다.
class R061_AxiosGet extends Component{
    componentDidMount() {
        axios.get("http://date.jsontest.com/").then(
            response => {alert(response.data.date)}
        )
    }

    render() {
        return (
            <h1>axios get</h1>
        );
    }
}

export default R061_AxiosGet;