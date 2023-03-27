
//----------------------------------------------SET TIME OUT---------------------------
console.log("script loaded");


for (let i = 0; i < 5; i++) {
  setTimeout(
    () => console.log(`called after ${i + 1} second${i === 0 ? "" : "s"}`),
    1000 * (i + 1)
  );
}



//------------------------------------------------SET INTERVAL--------------
//blocco l'esecuzione di interval usando setTimeout 

let id = setInterval(() => console.log("interval"), 1000);

setTimeout(() => clearInterval(id), 5000)
