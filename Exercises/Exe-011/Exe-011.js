
function findUser() {

    let userInput = document.querySelector(".gitUser");
    let userName = userInput.value;
    let listElement = document.querySelector('.userList');
    
    let listItem = document.createElement("li");
    let listText = document.createTextNode(userName);
    
    listItem.appendChild(listText);
    listElement.appendChild(listItem);
    // Using AXIOS

    axios.get('https://api.github.com/users/'+userName)
         .then(function(response){
            alert(JSON.stringify(response.data));
         })
         .catch(function(error){
            alert(error);
         });
}
