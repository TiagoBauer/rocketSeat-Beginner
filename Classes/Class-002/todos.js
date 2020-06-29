//Creating the JSON to generate new ToDo itens
function test(){
    console.log("Test JS");
}

let listElements = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodo(){
    listElements.innerHTML = "";
    for(todo of toDos){
        let todoElement = document.createElement("li");
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let pos = toDos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');

        let linktext = document.createTextNode("Excluir");

        linkElement.appendChild(linktext);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElements.appendChild(todoElement);
    }
}

renderTodo();

function addTodo(){
    let todoText = inputElement.value;

    toDos.push(todoText);
    inputElement.value = "";
    renderTodo();
    saveToStorage()
}

function deleteTodo(pos){
    toDos.splice(pos, 1);
    renderTodo();
    saveToStorage()
}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(toDos));
}
