//Lab 5.1
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
const populations = [98, 134, 1441, 10];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentage2 = [];
let size = populations.length;
for (let i = 0; i < size; i++) {
  percentage2.push(percentageOfWorld1(populations[i]).toFixed(1));
}
console.log(percentage2);
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

// Lab 5.7
// const populations = [98, 134, 1441, 10];
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
const percentage3 = [];
// let size = populations.length;
let i = 0;
while (i < size) {
  percentage3.push(percentageOfWorld1(populations[i]).toFixed(1));
  i++;
}
console.log(percentage3);
// Lab 5.8
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI() > john.calcBMI()
  ? console.log(
      `Mark's BMI (${mark.bmi.toFixed(
        1
      )}) is higher than John (${john.bmi.toFixed(1)})`
    )
  : console.log(
      `John's BMI (${john.bmi.toFixed(
        1
      )}) is higher than Mark's (${mark.bmi.toFixed(1)})`
    );
//Lab 5.8.2
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
size = bills.length;
for (let i = 0; i < size; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log("tips: ", tips);
console.log("totals: ", totals);
// bonus
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum / arguments.length).toFixed(2);
}
console.log(calcAverage(totals));
