function saluta(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  const name = "stefano";
  callback(name);
}

processUserInput(saluta);
