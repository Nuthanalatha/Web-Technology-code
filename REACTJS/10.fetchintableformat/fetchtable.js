class FetchData extends React.Component {
  state = {
    data: [],
  };
  fetchedDataFun() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((fetchedData) => {
        this.setState({
          data: fetchedData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.fetchedDataFun();
          }}
        >
          click
        </button>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
          {this.state.data.map((value, ind, arr) => {
            return (
              <table style>
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                {value.email}
                </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
ReactDOM.render(<FetchData />, document.getElementById("container"));
