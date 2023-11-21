import React, {Component} from 'react';

class R073_ReactRef extends Component {
    constructor(props){
        super(props);
        this.InputRef = React.createRef();
    }


    // createRef()로 만들어진 InputRef의 current 속성에 참조에 대한 정보가 저장된다.
    // 이것을 통해 querySelector 등을 대신하여 접근할 수 있다.
    Reffocus = (e) => {
        this.InputRef.current.focus();
        console.log(this.InputRef.current);
    }

    JavascriptFocus() {
        document.getElementById("id").focus();
    }

    render() {
        return(
            <div>
                <input id="id" type="text" ref={this.InputRef} />
                <input type="button" value="Ref Focus" onClick={this.Reffocus}/>
                <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
            </div>
        );
    }
}

export default R073_ReactRef;