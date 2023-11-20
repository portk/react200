import React, {Component} from "react";

class R070_ReactMouseOut extends Component{
    MouseOut(tag) {
        console.log("TAG : "+tag);
    }

    render() {
        return(
            <div>
                <div onMouseOut={e=> this.MouseOut("div")}>
                    <h3>DIV onMouseOut</h3>
                </div>
                <input type="text" onMouseOut={e => this.MouseOut("input")}/>
                <select onMouseOut={e => this.MouseOut("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </div>
        );
    }
}

export default R070_ReactMouseOut;