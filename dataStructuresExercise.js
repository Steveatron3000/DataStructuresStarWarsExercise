const jedi = [];

//[0] makes it the first item. [3] would make it the fourth.
jedi[0] = "Luke";
console.log(jedi);

//Push adds it to the end of the Array
jedi.push("Obi Wan Kenobi");
console.log(jedi);

//Unshift adds to the beginning of the array
jedi.unshift("Yoda");
console.log(jedi);

console.log(jedi[1]);
//[1] is actually the second. Putting the [1] makes it only show the second item. 


//Pop returns whatever is at the end of the array, and removes it
jedi.pop();
console.log(jedi);

//or

jedi.splice(0, 1);
//Splice: The first number is which item, the second is how many things are replaced. 
console.log(jedi);

const sithLords = ["Vader", "Sideous", "Maul"];
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

const starWarsVillains = [sithLords + " " + imperialOfficers];
console.log(starWarsVillains);


// const droids = {
//     astromech: "R2D2",
//     protocol: "C3P0",
//     assassin: "IG88";
// };
// droids.protocol

//Sideous
console.log(sithLords.slice(-2, -1));

//Movies
//Objects in {}s
const starWarsMovies = [
    {episodeOne: "The Phantom Menace", episodeTwo: "Attack of The Clones", episodeThree: "Revenge of The Sith" },

    {episodeFour: "A New Hope", episodeFive: "Empire Strikes Back", episodeSix:"Return of The Jedi"},

    {episodeSeven: "Force Awakens", episodeEight:"Not a movie", episodeNine:"Rise of Skywalker"}
];

starWarsMovies.splice(1, 0, "Solo", "Rogue One");
console.log(starWarsMovies);