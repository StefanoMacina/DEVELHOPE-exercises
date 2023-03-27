
// salvare un valore e salvarlo, quando si inserisce un testo nell'input viene stampato nella console
// cliccando sul button
const input = document.querySelector('input');

const button = document.querySelector('button');

const ul = document.querySelector('#list')

let todoArr = [];


function getValue() {
    const newToDo = input.value;
    todoArr.push(newToDo);
    console.log(todoArr);
    ul.innerHTML = "";
    input.value = "";
    for (let i = 0; i < todoArr.length ; i++){
        const li = document.createElement('li');
        li.innerText = newToDo;
        ul.appendChild(li);
    }

}



