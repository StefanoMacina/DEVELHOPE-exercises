const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserData(el) {
  localStorage.setItem("user", JSON.stringify(el));
}

saveUserData(user);


console.log(JSON.parse(localStorage.getItem("user")) );
