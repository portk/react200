import React, {useState, useEffect} from "react";

function R031_ReactHook(props){
    const [contents, setContents] = useState('[THIS IS REACT]');

    // 생명주기 함수의 componentDidMount()처럼  return되는 코드들이 화면에 그려진 이후 실행된다.(ex. state가 바뀔때)
    useEffect(() => {
        console.log("useEffect");
    })

    return (
        <div style={{padding:"0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents("[THIS IS HOOK")}>버튼</button>
        </div>
    );
}

export default R031_ReactHook;