let myCountry = {
  country: "Finland",
  langguage: "finnish",
  capital: "Helsinki",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.langguage}-speaking people, ${this.neighbours.length} neighbourring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.langguage}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
// myCountry.population;
console.log(myCountry.population + 2);
// myCountry["population"];
console.log(myCountry["population"] - 2);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// lab 5.4
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// Lab 5.5

// Lab 5.6
let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Span"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbours: ${listOfNeighbours[i][j]}`);
  }
}
