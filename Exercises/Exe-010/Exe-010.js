console.log("Using Promisses!");

let promisseTest = function(age){
    return new Promise(function(resolve, reject){
        if(age >= 18){
            resolve();
        } else {
            reject();
        }
    })
}

setTimeout(function(){promisseTest(18)
            .then(function resolve(){
            console.log("Maior");
            }).catch(function reject(){
            console.log("Menor");
})}, 2000);  

setTimeout(function(){promisseTest(20)
               .then(function resolve(){
                console.log("Maior");
             }).catch(function reject(){
                console.log("Menor");
})}, 2000);


setTimeout(function(){promisseTest(15)
               .then(function resolve(){
                console.log("Maior");
             }).catch(function reject(){
                console.log("Menor");
})}, 2000);