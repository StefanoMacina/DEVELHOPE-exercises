const $root = document.querySelector("#root");
const $updateBtn = document.querySelector("#update");
const $counterH1 = $root.querySelector("h1");
const $numInput = document.querySelector("#number")

console.dir($root)

let counter = 0;

$updateBtn.addEventListener("click", () => {
    if(counter < 100){
        counter += Number($numInput.value)
        $counterH1.innerHTML = counter;
    } else {counter = 0}
});
