import React, {Component} from 'react';

class ClassPrototype extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount() {
        //ES5 proptotype
        var ExamCountFunc = (function () {
            function ExamCount(num){
                this.number = num;
            }
            ExamCount.prototype.showNum = function() {
                console.log('1. react_' + this.number);
            };
            return ExamCount;
        }());
        // } 와 ) 사이에  ()가 없어지면 왜 오류가 나는지?
        // function (){}()는 퓨어 자바스크립트에서 거의 언제나 사용하는, IIFE(Immediately-invoked function expression: 즉시 작동하는 함수식)라는 구문
        // 만들어진 후 바로 실행되게 한다.

        var cnt = new ExamCountFunc('200');
        cnt.showNum();

        //ES6 class
        class ExamCountClass {
            constructor(num2) {
                this.number2 = num2;
            }
            showNum() {
                console.log(`2. react_${this.number2}`);
            }
        }

        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    render(){
        return(
            <h2>[THIS IS Class]</h2>
        );
    }
}

export default ClassPrototype;