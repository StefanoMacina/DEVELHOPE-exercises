function printAsyncName(callback, name) {
  setTimeout(() => {
    setTimeout(() => {
      console.log(name);
    }, 1000);

    callback();
  }, 1000);
}

function callback() {
  console.log("Hello");
}

printAsyncName(callback, "Stefano");
