let login = () => {
  console.log("function");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" && password === "") {
    alert("please enter the values");
  } else {
    alert("login successfull");
  }
};
