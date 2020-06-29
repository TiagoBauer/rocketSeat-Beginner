// USing XMLHttpRequest
/*var myPromisse = function (){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/TiagoBauer');
        xhr.send(null);

        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Requisition Error!");
                }
            }
        }
    })
}

var result = myPromisse().then(function(response){
                console.log(response);
            }).catch(function(error){
                console.warn(error);
            });
*/

// Using AXIOS
axios.get('https://api.github.com/users/TiagoBauer')
     .then(function(response){
        console.log(response);
     })
     .catch(function(error){
         console.warn(error);
     });