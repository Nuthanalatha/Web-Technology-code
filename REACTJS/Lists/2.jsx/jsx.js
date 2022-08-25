//jsx means javascript xml
////babel will convert jsx to browser understandable code (act like compiler)

console.log("started");
const element = <h1>hello world</h1>; //jsx way of creating an element
console.log(element);

const names = "Nuthana";
const h1Element = <h1>hello {names}</h1>; //hello Nuthana //we pass js element in jsx using {}({names})

const h1Element1 = <h1>hello {console.log("i am inside jsx")}</h1>;

const mobiles = ["one+", "apple", "samsung", "realme", "redmi"];
const loopingData = mobiles.map((value) => {
  return <h1>{value}</h1>; //React.createElement("p",null,"")
});

const ulElement = (
  <ul>
    {mobiles.map((value) => {
      return <li>{value}</li>;
    })}
  </ul>
);

const allItems = React.createElement(
  "div",
  null,
  ulElement,
  loopingData,
  h1Element,
  h1Element1
);

ReactDOM.render(allItems, document.getElementById("container")); //1st give h1Element for hello Nuthana
