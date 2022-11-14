let country = "Việt Nam";
const continent = "Asia";
let population = 90;
let isIsland = `Việt Nam`;
if (country == isIsland) console.log(true);

// console.log(`lab 2.2`);
let language = `English`;
// console.log(country, continent, ++population);
// // lab 2.3
// population = population / 2;
// console.log("Dân số chia thành 2 miền = " + population);

let Pl = 6;
if (population > Pl) {
  console.log("population : " + population);
}
const AvgPopulation = 33;
console.log(
  "Dân số của nước ta có lớn hơn 33tr không: ",
  population > AvgPopulation
);
// lab 2.4
const description = `${country} and its ${population}   million people speak ${language}`;
console.log(description);
// lab 2.5
if (population > 33) {
  console.log(`${country}'s population is above averdge`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below averdge`
  );
}
//Lab 2.6
let markMass = 78,
  markHeight = 1.69;
let johnMass = 92,
  johnHeight = 1.95;
let markHigherBMI;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      1
    )}) is higher than John's (${johnBMI.toFixed(1)})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI.toFixed(
      1
    )}) is higher than Mark's (${markBMI.toFixed(1)})!`
  );
}
