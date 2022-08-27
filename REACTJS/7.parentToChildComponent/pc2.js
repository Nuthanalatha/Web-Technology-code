function Parent() {
  let data = ["Chocolates", "Mango", "Apple", "stroberry", "banana"];

  let data1 = [
    { firstName: "Megha", lName: "T A", ph: 345678909 },
    { firstName: "Namana", lName: "Jain", ph: 395678909 },
    { firstName: "Nayana", lName: "S R", ph: 345670909 },
    { firstName: "Avi", lName: "Palerya", ph: 345078909 },
  ];
  return (
    <div>
      <h1>Parent Component</h1>
      <Child data={data} data1={data1} />
    </div>
  );
}

function Child(props) {
  console.log(props.data);
  console.log(props.data1);
  return (
    <div>
      <h1>Child Component</h1>

      {props.data.map((value, ind) => {
        return <p key={ind}>{value}</p>;
      })}
      {props.data1.map((value, ind) => {
        return <h1 key={ind}>{value.firstName}</h1>;
      })}
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("container"));
