import React, {Component} from 'react';

class R017_Props extends Component {
    render() {
        let props_val = this.props.props_val;
        props_val += ' from App.js';
        return (
            <div>{props_val}</div>
        );
    }
}

export default R017_Props;