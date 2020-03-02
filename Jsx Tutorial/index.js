var ReactDOM = require("react-dom");

const name = "Chirag";
const element = <h1>Hello, {name}</h1>;

console.log("Script loaded")

ReactDOM.render(
    element,
    document.getElementById('root')
);