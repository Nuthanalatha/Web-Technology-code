function AddSub() {
  let [num, setNum] = React.useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  function decrement() {
    setNum(num - 1);
  }

  function reset() {
    setNum(0);
  }

  return (
    <div>
      <h1>counter:{num}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        clickToIncrement
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        clickToDecrement
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

ReactDOM.render(<AddSub />, document.getElementById("container"));
