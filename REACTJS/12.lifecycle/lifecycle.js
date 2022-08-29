//lifecycle method 1st lifecycle method is constructor
//all initialations are to be done in constructor
//2.getderivedstatefromprops method and render method
// upto here is mounting phase
class Parent extends React.Component {
  componentDidMount() {
    //this method will be exicuted for the first time mounting to real dom
    //it is used to make sideeffects(fetching,subscribing...) to the component
    //you can make api calls in this method
    //we are doing bussiness logic in this method
    console.log("parent componentDidMount exicuted");
  }
  constructor() {
    super();
    this.state = {
      text: "mounting Phase",
      show: true,
    };
    console.log("parent Constructor exicuted");
  }
  static getDerivedStateFromProps(props, state) {
    //1.it returns the new state or if there is no change in the state then it will return null
    console.log("Parent getDerivedStateFromProps exicuted");
    return state; //or return null;
  }
  render() {
    //we have UI logic or presentation is there inrender method
    //in render method we should update anything or we should not
    //perform any side effects.because if try to update anything
    //render method it will go to infinite loop

    console.log("render method exicuted");
    return (
      <div>
        {this.props.age}
        <h1>{this.state.text}</h1>
        <button
          onClick={() => {
            this.updateText("updating phase");
          }}
        >
          click
        </button>

        {this.state.show ? <Child /> : null}
      </div>
    );
  }

  updateText(text) {
    this.setState({
      text: text,
      show: false,
    });
  }
  shouldComponentUpdate() {
    console.log("Parent shouldComponentUpdate exicuted");
    return true; //or flase we can give
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("parent getSnapshotBeforeUpdate exicuted");
    return "scrolling position";
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log("Parent componentDidUpdate exicuted");
    console.log("previous prop", prevProp);
    console.log("previous state", prevState);
    console.log("snapshot", snapshot);
  }
}

class Child extends React.Component {
  render() {
    return <div>child component</div>;
  }

  componentWillUnmount() {
    console.log("child componentWillUnMount exicuted");
  }
}

ReactDOM.render(<Parent age="23" />, document.getElementById("container"));
