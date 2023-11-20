import React, {Component} from "react";
import { Alert, UncontrolledAlert } from "reactstrap";


//외부 개발자분들이 만들어둔 라이브러리인 reactstrap과 bootstrap이 사용되었다.
// bootstrap의 css는 https://getbootstrap.com/docs/5.3/getting-started/introduction/ 를,
// reactstrap은 https://reactstrap.github.io/?path=/story/home-installation--page를 참조하자.
class R034_ReactstrapAlerts extends Component{
    render() {
        return(
            <div>
                <Alert color="light">
                    Simple Alert [ color : light ]
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert [ color : warning]
                </UncontrolledAlert>
            </div>
        );
    }
}

export default R034_ReactstrapAlerts;