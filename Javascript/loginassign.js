let login = () => {
  console.log("function");
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (name === "/^[a-zA-z]*$" && age === (age > 0 && age < 150)) {
    alert("login successfull");
  } else {
    alert("please enter the correct values");
  }
};
