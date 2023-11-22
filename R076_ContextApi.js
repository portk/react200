import React from 'react';
import Children from "./contextChildren";

const {Provider, Consumer} = React.createContext();
export {Consumer}

// Provider를 이용하여 하위 컴포넌트로 보내줄 수 있다.
// 보내줄 때 <Provider value=""><대상 컴포넌트></Provider>로 보내주며
// 받을 땐 <Consumer>{e=> {}}</Consumer>로 받을 수 있다.
// 중간에 사용해도 뒤로 넘어가지며 return 안에 있는 대상에게 계속 넘어가지는 것이 장점으로 보이며,
// 사이에 들어간 모든 컴포넌트에 데이터가 넘어가는 것이 단점으로 보인다.

class R076_ContextApi extends React.Component{
    render() {
        return (
            <Provider value="react200">
                <Children />
            </Provider>
        )
    }
}
export default R076_ContextApi;