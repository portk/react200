import React, {Component} from "react";

class R068_ReactMouseMove extends Component{
    MouseMove(tag) {
        console.log("TAG : " +tag);
    }

    render() {
        return (
            <React.Fragment>
                <div onMouseMove={e => this.MouseMove("div")}>
                    <h3>DIV onMouseMove</h3>
                </div>
                <input type="text" onMouseMove={e => this.MouseMove("input")}/>
                <select onMouseMove={e => this.MouseMove("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </React.Fragment>
        );
    }
}

export default R068_ReactMouseMove;