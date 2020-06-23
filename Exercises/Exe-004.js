//This function check the experience level based in years of study
let checkExperience = (years) => {
    if(years < 0)
        return "Invalid number of years!"

    if(isNaN(years))
        return "The parameter passed is not a Number!"

    if(years <= 1)
        return "Beginner";
    else if (years <= 3)
        return "Intermediary";
    else if(years <= 6)
        return "Advanced";
    else 
        return "Jedi Master";
}

console.log(checkExperience(5));
console.log(checkExperience(0));
console.log(checkExperience(2));
console.log(checkExperience(15));

console.log(checkExperience("Tiago"));
console.log(checkExperience(-5));
