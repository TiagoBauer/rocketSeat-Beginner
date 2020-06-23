//This function check if the skill is present in the array
let checkSkill = (skill, lookFor) => {
    if(skill.indexOf(lookFor) > -1)
        return true;
    else 
        return false;
}

let personSkills = ["JavaScript", "ReactJs", "React Native"];

console.log(checkSkill(personSkills, "JavaScript"));
console.log(checkSkill(personSkills, "React Native"));
console.log(checkSkill(personSkills, "ReactJs"));
console.log(checkSkill(personSkills, "C#"));
console.log(checkSkill(personSkills, "Delphi"));
console.log(checkSkill(personSkills, "Java"))
