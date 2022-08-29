function MyApp() {
  const [person, setPerson] = React.useState({
    fName: "Himagirish",
    lName: "N D",
  });

  function updateName() {
    setPerson({ ...person, fName: "Vaibhav" });
  }

  return (
    <div>
      <p>{person.fName}</p>
      <p>{person.lName}</p>
      <button
        onClick={() => {
          updateName();
        }}
      >
        click
      </button>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("container"));
