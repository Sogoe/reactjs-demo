/**
 * Created by Lyy on 2015/7/31.
 */
import React from "react"
require("../css/test.css");
class HelloWorld extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<label>Hello React!</label>);
    }
}

export default HelloWorld