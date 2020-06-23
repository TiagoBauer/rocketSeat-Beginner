//Check the pairs between the number indicated
let pairs = (minimun, maximun) => {
    let countPair = 0;
    //Validate if the minimun value is less than the maximun
    if(minimun > maximun){
        return "Error minimun is less than maximum! Please check the parameters!";
    } else {
        for (let index = minimun; index <= maximun; index++) {
            //Chek if the number is Pair    
            if((index % 2) == 0)
                countPair++;
        }
    }
    return countPair;
}

//Check the odds between the number indicated
let odds = (minimun, maximun) => {
    let countOdd = 0;
    //Validate if the minimun value is less than the maximun
    if(minimun > maximun){
        return "Error minimun is less than maximum! Please check the parameters!";
    } else {
        for (let index = minimun; index <= maximun; index++) {
            //Chek if the number is odds    
            if((index % 2) == 1)
            countOdd++;
        }
    }
    return countOdd;
}

console.log("Return the Odds and the pairs between the numbers 1 and 5")
console.log("Odds..:" + odds(1,5));
console.log("Pairs.:" + pairs(1,5));
