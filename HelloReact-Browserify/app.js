/**
 * Created by Lyy on 2015/7/30.
 */
var React = require("react");

var HelloWorld = React.createClass({
    render: function() {
        var name = this.props.name || "React";
        return (
            <label>Hello {name}!</label>
        );
    }
});

React.render(
    <HelloWorld />,
    document.getElementById("container")
);