class Greet extends React.Component {
  state = {
    firstName: "Prajwal",
    age: 22,
  };
  changeName = () => {
    console.log("before setState:", this.state.firstName); //prajwal
    this.setState(
      {
        firstName: "Himagirish",
        age: 21,
      },
      () => {
        console.log("after setState", this.state.firstName); //HImagirish
      }
    );
  };
  changeProp = () => {
    this.props.lName = "Ramana";
  };
  render() {
    console.log(this.props.lName);
    return (
      <div>
        <h1>
          firstName:{this.state.firstName}, age:{this.state.age}
        </h1>
        <h2>{this.props.lName}</h2>
        <button
          onClick={() => {
            this.changeProp();
          }}
        >
          change prop
        </button>
        <button
          onClick={() => {
            this.changeName();
          }}
        >
          click to change name
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Greet />, document.getElementById("container"));
