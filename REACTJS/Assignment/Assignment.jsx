//1.Example for Jsx

const myElement = <h1>I Love JSX!</h1>;

ReactDOM.render(myElement, document.getElementById("container"));

//3.example for class component
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

ReactDOM.render(<Car />, document.getElementById("container"));

//example for function components
function Bus() {
  return <h2>Hi, I am a bus! in function</h2>;
}

ReactDOM.render(<Bus />, document.getElementById("container"));

//
