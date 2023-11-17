import React, {Component} from 'react';

class R023_PropsDefault extends Component {
    render(){
        return(<div style={{padding: "0px"}}>
            {this.props.children}
        </div>);
    }
}

export default R023_PropsDefault;