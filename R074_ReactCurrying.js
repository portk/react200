import React, {Component} from 'react';

class R074_Curring extends Component {

    plusNumOrStrig(c, d){
        return c + d;
    }

    // 아래의 두가지 방법 모두 함수를 넘길 수 있다.
    // 커링(Currying)은 함수의 재사용성을 높이기 위해 함수 자체를 return 하는 함수이다. 함수를 하나만 사용할 때는 필요한 모든 파라미터를 한 번에 넣어야 한다.
    // 하지만 커링을 사용하면 함수를 분리할 수 있으므로파라미터도 나눠 전달할 수 있다.
    PlusFunc1(a){
        return function(b) {
            return this.plusNumOrStrig(a,b)
        }.bind(this)
    }

    PlusFunc2 = a => b => this.plusNumOrStrig(a,b)

    PlusFunc(a){
        return this.PlusFunc2(a)(200)
    }

    render(){
        return(
            <div>
                <input type="button" value="NumberPlus" onClick={e => alert(this.PlusFunc(100))}/>
                <input type="button" value="StringPlus" onClick={e => alert(this.PlusFunc("react"))}/>
            </div>
        );
    }
}

export default R074_Curring;