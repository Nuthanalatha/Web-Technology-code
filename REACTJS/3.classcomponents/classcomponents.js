//to create a component you should follow the pascle case

//jsx rules
//if we have more than two elements we have to wrap it inside the paranthesis
//if more than one element is there in the component then you have to wrap it inside parent element

class Header extends React.Component {
  render() {
    console.log(this.props.firstName);
    console.log(this.props.lastName);
    return (
      <div>
        <div>
          <h1>i am a new header</h1>
          <p>kjhgfdsdfghjjhgfdsfghjklkjhgfdsfghjkljhgfdcvbnm,jhgfds</p>
          <h1>hello{this.props.firstName}</h1>
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    console.log(this.props.details);
    return (
      <div>
        <h1>hello i am content page</h1>
        <h1>this is the{this.props.details}</h1>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>hello i am footer</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Header firstName="Megha" lastName="Gowda" />
    <Content details=" content page details" /> <Footer />
  </div>,
  document.getElementById("container")
);
