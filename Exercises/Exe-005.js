// This is the data provided for this exercise
let usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

//This function look for a name inside the array provided, and show the habilities linked to the person
let returnSkills = (usuarios, name) => {
    let user = null;
    let skills = "";
    for (let index = 0; index < usuarios.length; index++) {
        if(usuarios[index].nome == name){
            user = usuarios[index];
            skills = usuarios[index].habilidades.join(", ");
            break;
        }
    }
    if(user != null && skills != null)
        return name + " have the following skills: " + skills;
}

console.log(returnSkills(usuarios, "Diego"));
console.log(returnSkills(usuarios, "Gabriel"));
   