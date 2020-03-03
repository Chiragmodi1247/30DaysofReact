const numbers = [1,2,3,4,5]
const ListItems = numbers.map((number) => 
<li>{number}</li>
);

ReactDOM.render(
<ul>{ListItems}</ul>,
document.getElementById('root')
)