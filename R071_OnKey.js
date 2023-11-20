import React, {Component} from 'react';

// 책을 따라하기 위해 그대로 작성하였지만 addEventListener가 더 좋다고 한다.
class R071_OnKey extends Component {
    OnKey(event, e) {
        var val = e.target.value;
        console.log("event : "+event+", value: "+val);
    }

    render() {
        return(
            <div>
                onKeyDown : <input type="text" onKeyDown={e => this.OnKey("onKeyDown",e)}/><br/>
                onKeyPress : <input type="text" onKeyPress={e => this.OnKey("onKeyPress",e)}/><br/>
                onKeyUp : <input type="text" onKeyUp={e => this.OnKey("onKeyUp",e)}/>
            </div>
        );
    }
}

export default R071_OnKey;