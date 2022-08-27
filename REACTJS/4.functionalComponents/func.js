//functional components

function Header(props) {
  return (
    <div>
      <h1>
        header{props.logo}-{props.brand}
      </h1>
      <h1>I am in header Component</h1>;
      <img src={props.logo} />
    </div>
  );
}

function Content({ fName, lName }) {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        {fName}
        {lName}
      </p>
    </div>
  );
}

function Footer(props) {
  let { name, age } = props;
  return (
    <div>
      <h1>
        footer {name}
        {age}
      </h1>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Header logo="download.avif" brand="Lamborgini" />
    <Content fName="Nayana" lName="S R" />
    <Footer name="Avi" age="22" />
  </div>,
  document.getElementById("container")
);
