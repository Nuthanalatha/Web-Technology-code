//inline style
function Greet() {
  const myStyle = { backgroundColor: "pink" };
  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "blue", fontsize: "40px" }}>
        Hello React
      </h1>
      <h2 style={myStyle}>This is H2 element with style</h2>

      {/* //external style */}
      <div className="main">
        <div className="d1"></div>
        <div className="d2"></div>
      </div>
      <br></br>

      <div className="main1">
        <div className="div1">
          <div className="d3"></div>
          <div className="d4"></div>
        </div>
        <div className="div2">
          <div className="d5"></div>
          <div className="d6"></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Greet />, document.getElementById("container"));
